import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { TicketReportsComponent } from './ticket-reports/ticket-reports.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reports',
    pathMatch: 'full'
  },
  {
    path: 'reports',
    component: TicketReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details:id',
    component: TicketDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-ticket',
    component: NewTicketComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
