// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RemoteEntryComponent } from './remoteEntry.component';
// import { DoctorRoutingModule } from './remote.routes';


// import { graphqlProviders } from '@hospital-common/graphql';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule, RemoteEntryComponent, DoctorRoutingModule
//   ],
//   providers:[
//     graphqlProviders
//   ],
//   exports: [RemoteEntryComponent]
// })
// export class RemoteModule { }


import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './remoteEntry.component';
import { DoctorRoutingModule } from './remote.routes';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RemoteEntryComponent,
    DoctorRoutingModule
  ],
  providers: [
  ],
  exports: [RemoteEntryComponent],
})
export class RemoteModule { }
