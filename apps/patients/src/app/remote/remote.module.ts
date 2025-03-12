import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './remoteEntry.component';
import { PatientRoutingModule } from './remote.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RemoteEntryComponent, PatientRoutingModule
  ],
  exports: [RemoteEntryComponent]
})
export class RemoteModule { }
