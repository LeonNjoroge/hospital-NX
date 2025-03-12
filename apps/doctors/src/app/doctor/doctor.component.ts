import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteModule } from '../remote/remote.module';
import { Apollo, gql } from 'apollo-angular';
import { FormsModule, NgForm} from '@angular/forms';


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

const DELETE_PATIENT = gql`
  mutation DeletePatient($id: ID!) {
    deletePatient(id: $id) {
      id
    }
  }
`;

const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id: ID!, $name: String, $age: Int, $email: String, $datetime: String) {
    updatePatient(id: $id, name: $name, age: $age, email: $email, datetime: $datetime) {
      id
      name
      age
      email
      datetime
    }
  }
`;


@Component({
  selector: 'app-doctor',
  imports: [CommonModule, RemoteModule, FormsModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent implements OnInit {
  loading = false;
  error: string | null = null;
  patients: any[] = [];
  selectedPatient: any = null;

  

  constructor(private apollo: Apollo) {}
   
  
    ngOnInit() {
      this.loading = true;

      this.apollo
        .watchQuery({ query: GET_PATIENTS })
        .valueChanges.subscribe(({ data, loading, error }: any) => {
          this.loading = loading;
          this.error = error;
          this.patients = data?.patients;
        });
        
        this.loading = false;
        
    }

    removePatient(id: string) {
      this.apollo
        .mutate({
          mutation: DELETE_PATIENT,
          variables: { id },
          refetchQueries: [{ query: GET_PATIENTS }], // Refresh list after deleting
        })
        .subscribe({
          next: () => console.log(`Patient with ID ${id} removed.`),
          error: (err) => console.error('Error removing patient:', err),
        });
    }
    

    editPatient(patient: any) {
      this.selectedPatient = { ...patient }; // Copy patient data into the form
    }
  
    onUpdate(form: NgForm) {
      if (form.invalid) return;
  
      const { id, name, age, email, datetime } = this.selectedPatient;
  
      this.apollo
        .mutate({
          mutation: UPDATE_PATIENT,
          variables: { id, name, age: Number(age), email, datetime },
          refetchQueries: [{ query: GET_PATIENTS }],
        })
        .subscribe({
          next: () => {
            this.selectedPatient = null;
          },
          error: (err) => console.error("Error updating patient:", err),
        });
    }

    cancelUpdate() {
      this.selectedPatient = null; // Hide the update form if canceled
    }
  }

  

