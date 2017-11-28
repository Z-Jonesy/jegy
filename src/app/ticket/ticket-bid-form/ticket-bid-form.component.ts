import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketModel} from '../../shared/ticket-model';

@Component({
  selector: 'app-ticket-bid-form',
  templateUrl: './ticket-bid-form.component.html',
  styleUrls: ['./ticket-bid-form.component.css']
})
export class TicketBidFormComponent {
  @Input() ticket: TicketModel;
  @Output() BidWithStep = new EventEmitter<void>();

  // constructor() { }
  //
  // ngOnInit() {
  // }

  onBidWithStep() {
    this.BidWithStep.emit();
  }

}
