import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';

import { Apollo, gql } from 'apollo-angular';

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



@Component({
  selector: 'app-patients',
  imports: [CommonModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  constructor(private apollo: Apollo) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return; // Ensure form is valid

    const { name, age, email, datetime } = form.value;

    this.apollo
      .mutate({
        mutation: ADD_PATIENT,
        variables: { name, age: Number(age), email, datetime },
      })
      .subscribe({
        next: (response) => {
          console.log('Patient added:', response.data);
          form.reset(); // Reset form after successful submission
        },
        error: (err) => {
          console.error('Error adding patient:', err);
        },
      });
  }

  
}
