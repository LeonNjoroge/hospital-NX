import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteEntryComponent } from './remoteEntry.component';
import { DoctorComponent } from '../doctor/doctor.component';

export const remoteRoutes: Routes = [
  { path: '', component: RemoteEntryComponent },
  { path: 'docotr-detail', component: DoctorComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],  
  exports: [RouterModule]
})
export class DoctorRoutingModule {}
