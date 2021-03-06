///<reference path="core/nav-bar-item/nav-bar-item.component.ts"/>
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AlertModule, CollapseModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {EventcardComponent} from './event/eventcard/eventcard.component';
import {EventService} from './shared/event.service';
import {LoggedInGuardGuard} from './shared/logged-in-guard.guard';
import {TicketService} from './shared/ticket.service';
import {UserService} from './shared/user.service';
import {TicketDetailsCardComponent} from './ticket/ticket-details-card/ticket-details-card.component';
import {BiddingCardComponent} from './ticket/bidding-card/bidding-card.component';
import {MomentModule} from 'angular2-moment';
import 'moment/locale/hu';
import {TicketBidFormComponent} from './ticket/ticket-bid-form/ticket-bid-form.component';
import {LoadingSpinnerComponent} from './core/loading-spinner/loading-spinner.component';
import {BidService} from './shared/bid.service';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {NavBarItemComponent} from './core/nav-bar-item/nav-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavBarItemComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents,
    TicketDetailsCardComponent,
    BiddingCardComponent,
    TicketBidFormComponent,
    LoadingSpinnerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    EventService,
    UserService,
    TicketService,
    LoggedInGuardGuard,
    BidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebase);
  }
}
