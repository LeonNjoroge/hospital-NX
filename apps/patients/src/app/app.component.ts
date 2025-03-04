import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './remote/remoteEntry.component';


@Component({
  imports: [ RouterModule, RemoteEntryComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'patients';
}
