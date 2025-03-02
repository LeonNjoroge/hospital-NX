import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HospitalCommonModule } from '@hospital-common/libs';


@Component({
  imports: [ RouterModule, HospitalCommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';
}
