import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TicketReportsItem } from '../../core/models/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  ticket$: Observable<TicketReportsItem>;
  selectedId: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ticket$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        return of({
          ticketId: this.selectedId,
          customerId: 'DM-' + Math.random().toString(36).substr(2, 5),
          customerName: 'Nancy Johnson',
          repName: 'John Doe',
          phone: 9095551234,
          openDate: new Date(2017, 4, 18),
          resolveDate: new Date(2017, 4, 22),
          status: 'Resolved',
          subject: '',
          details: ''
        });
      })
    );
  }
}
