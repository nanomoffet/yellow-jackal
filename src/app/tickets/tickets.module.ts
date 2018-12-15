import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import {
  MatCardModule,
  MatInputModule,
  MatPaginatorModule, MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketReportsComponent } from './ticket-reports/ticket-reports.component';

@NgModule({
  declarations: [
    NewTicketComponent,
    TicketDetailsComponent,
    TicketReportsComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class TicketsModule { }
