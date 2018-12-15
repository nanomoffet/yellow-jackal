import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { TicketReportsItem } from '../../core/models/ticket';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TicketReportsItem[] = [
  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },  {
    ticketId: Math.random().toString(36).substr(2, 5),
    customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
    customerName: 'Nancy Johnson',
    repName: 'John Doe',
    phone: 9095551234,
    openDate: new Date(2017, 4, 18),
    resolveDate: new Date(2017, 4, 22),
    status: 'Resolved',
    subject: '',
    details: ''
  },
];

/**
 * Data source for the TicketReports view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TicketReportsDataSource extends DataSource<TicketReportsItem> {
  data: TicketReportsItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TicketReportsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TicketReportsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TicketReportsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'customerName':
          return compare(a.customerName, b.customerName, isAsc);
        case 'customerId':
          return compare(+a.customerId, +b.customerId, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
