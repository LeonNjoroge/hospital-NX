import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsComponent } from './patients/patients.component';

@Component({
  selector: 'app-remote-patient',
  imports: [CommonModule, PatientsComponent],
  templateUrl: './remoteEntry.component.html',
  styleUrl: './remoteEntry.component.scss',
})
export class RemoteEntryComponent {}
