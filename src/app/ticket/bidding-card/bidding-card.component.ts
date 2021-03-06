import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TicketModel} from '../../shared/ticket-model';

@Component({
  selector: 'app-bidding-card',
  templateUrl: './bidding-card.component.html',
  styleUrls: ['./bidding-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiddingCardComponent {
  @Input() ticket: TicketModel;
  @Input() isLoggedIn: boolean;
  @Output() refreshTicket = new EventEmitter<void>()
  @Input() loading = false;

  onBidWithStep() {
    this.refreshTicket.emit();
  }
}
