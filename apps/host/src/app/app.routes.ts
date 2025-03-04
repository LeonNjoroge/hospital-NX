import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const remoteRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashoard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'patients',
    loadChildren: () =>
      loadRemoteModule('patients', './PatientRoute').then(m => m.remoteRoutes), 
  },
  {
    path: 'doctors',
    loadChildren: () =>
      loadRemoteModule('doctors', './DoctorRoute').then(m => m.remoteRoutes), 
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

