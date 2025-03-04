import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteModule } from '../remote/remote.module';

@Component({
  selector: 'app-doctor',
  imports: [CommonModule, RemoteModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent  {
  loading = false;
  error: string | null = null;
  patients: any[] = [];

  

  constructor() {
    this.loadPatients();
  }

  
  loadPatients() {
    this.loading = true;

    
      setTimeout(() => {
        this.patients = [
          {
            "id": 1,
            "name": "John Doe",
            "age": 32,
            "email": "johndoe@example.com",
            "datetime": "2025-04-03T15:30:00Z"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "age": 28,
            "email": "janesmith@example.com",
            "datetime": "2025-05-03T16:10:00Z"
          },
          {
            "id": 3,
            "name": "Alice Johnson",
            "age": 45,
            "email": "alicejohnson@example.com",
            "datetime": "2025-03-05T17:40:00Z"
          },
          {
            "id": 4,
            "name": "Michael Brown",
            "age": 50,
            "email": "michaelbrown@example.com",
            "datetime": "2025-07-03T18:30:00Z"
          },
          {
            "id": 5,
            "name": "Emily Wilson",
            "age": 36,
            "email": "emilywilson@example.com",
            "datetime": "2025-03-03T08:10:00Z"
          }
        ];
    
        this.loading = false; // Stop loading
      }, 2000); // Simulating an API call with a delay
    }

  }

  

