import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TicketReportsDataSource } from './ticket-reports-datasource';
import { Filter } from '../../core/models/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-reports',
  templateUrl: './ticket-reports.component.html',
  styleUrls: ['./ticket-reports.component.scss'],
})
export class TicketReportsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TicketReportsDataSource;

  constructor(private router: Router) {}

  filters: Filter[] = [
    {value: 'pending', viewValue: 'Pending'},
    {value: 'readyForApproval', viewValue: 'Ready For Approval'},
    {value: 'resolved', viewValue: 'Resolved'},
    {value: 'reopened', viewValue: 'Reopened'},
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ticketId', 'customerId', 'customerName', 'repName', 'openDate', 'resolveDate', 'status'];

  ngOnInit() {
    this.dataSource = new TicketReportsDataSource(this.paginator, this.sort);
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    // @TODO implement custom filterPredicate per this SO: https://stackoverflow.com/questions/48506606/custom-filter-in-mat-table
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(e) {
    this.router.navigate(['/tickets/details']);
  }
}
