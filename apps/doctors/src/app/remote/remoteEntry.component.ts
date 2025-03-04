import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor/doctor.component';




@Component({
  selector: 'app-remote-doctor',
  imports: [CommonModule, DoctorComponent],
  templateUrl: './remoteEntry.component.html',
  styleUrl: './remoteEntry.component.css',
})
export class RemoteEntryComponent {}
