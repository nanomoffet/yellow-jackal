import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainNavRoutingModule } from './main-nav.routing';
import { DashboardSummaryComponent } from '../dashboard/dashboard-summary/dashboard-summary.component';
import { TicketsModule } from '../tickets/tickets.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MainNavRoutingModule,
    DashboardModule,
    TicketsModule
  ]
})
export class MainNavModule { }
