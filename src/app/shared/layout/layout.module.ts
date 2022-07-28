import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    SideNavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
