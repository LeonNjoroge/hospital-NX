import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalCommonModule } from '@hospital-common/libs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HospitalCommonModule],
  templateUrl: './dashoard.component.html',
  styleUrl: './dashoard.component.scss',
})
export class DashboardComponent {}
