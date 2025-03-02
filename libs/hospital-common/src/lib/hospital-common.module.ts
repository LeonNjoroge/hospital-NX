import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './common/lib/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CoreModule]
})
export class HospitalCommonModule { }
