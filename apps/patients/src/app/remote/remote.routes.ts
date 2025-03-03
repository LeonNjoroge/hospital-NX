import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component'; // The patient-related component
import { RemoteEntryComponent } from './remoteEntry.component';


export const remoteRoutes: Routes = [
  { path: '', component: RemoteEntryComponent },
  { path: 'patient-detail', component: PatientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)], 
  exports: [RouterModule]
})
export class PatientRoutingModule {}
