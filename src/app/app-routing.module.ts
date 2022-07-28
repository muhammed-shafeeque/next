import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './shared/layout/admin-dashboard/admin-dashboard.component';

export const AppRoutingModule: Routes = [

  {
    path : '',
    component : AdminDashboardComponent,
    children : [
      {
        path : 'dashboard',
        loadChildren : () => import('./view/dashboard/dashboard.module').then((m : any) =>m.DashboardModule)
      }
    ]
  }

];


