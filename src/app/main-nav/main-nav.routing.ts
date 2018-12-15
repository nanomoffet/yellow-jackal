import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardSummaryComponent } from '../dashboard/dashboard-summary/dashboard-summary.component';
import { TicketReportsComponent } from '../tickets/ticket-reports/ticket-reports.component';
import { TicketDetailsComponent } from '../tickets/ticket-details/ticket-details.component';
import { NewTicketComponent } from '../tickets/new-ticket/new-ticket.component';

const routes: Routes = [
  {
    path: '', component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardSummaryComponent },
      { path: 'tickets', redirectTo: 'tickets/report', pathMatch: 'full' },
      { path: 'tickets/report', component: TicketReportsComponent },
      { path: 'tickets/details/:id', component: TicketDetailsComponent },
      { path: 'tickets/new-ticket', component: NewTicketComponent },

      // @TODO figure out why nav frame loads twice when lazy loading modules
      // { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
      // { path: 'tickets', loadChildren: 'app/tickets/tickets.module#TicketsModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavRoutingModule {
}
