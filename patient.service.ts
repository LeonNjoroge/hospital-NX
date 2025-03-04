import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Define GraphQL Queries & Mutations
const GET_PATIENTS = gql`
  query {
    patients {
      id
      name
      age
      email
      datetime
    }
  }
`;

const ADD_PATIENT = gql`
  mutation AddPatient($name: String!, $age: Int!, $email: String!, $datetime: String!) {
    addPatient(name: $name, age: $age, email: $email, datetime: $datetime) {
      id
      name
      age
      email
      datetime
    }
  }
`;

// Define Patient Type
export interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  datetime: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private apollo: Apollo) {}

  // ✅ Ensure `hospitalInfo` client is used correctly
  getPatients(): Observable<Patient[]> {
    return this.apollo
      .use('hospitalInfo') // Named client
      .watchQuery<{ patients: Patient[] }>({ query: GET_PATIENTS })
      .valueChanges.pipe(
        map((result) => result.data.patients),
        catchError((error) => {
          console.error('Error fetching patients:', error);
          return throwError(() => new Error('Failed to fetch patients'));
        })
      );
  }

  addPatient(name: string, age: number, email: string, datetime: string): Observable<Patient> {
    return this.apollo
      .use('hospitalInfo') // Named client
      .mutate<{ addPatient: Patient }>({
        mutation: ADD_PATIENT,
        variables: { name, age, email, datetime },
      })
      .pipe(
        map((result) => result.data!.addPatient),
        catchError((error) => {
          console.error('Error adding patient:', error);
          return throwError(() => new Error('Failed to add patient'));
        })
      );
  }
}
