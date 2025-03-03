import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './remoteEntry.component';
import { DoctorRoutingModule } from './remote.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RemoteEntryComponent, DoctorRoutingModule
  ],
  exports: [RemoteEntryComponent]
})
export class RemoteModule { }
