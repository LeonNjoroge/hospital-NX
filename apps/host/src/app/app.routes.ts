import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const remoteRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('../dashboard/dashoard.component').then(m => m.DashboardComponent),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

