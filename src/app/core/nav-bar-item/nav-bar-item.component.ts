import {AfterViewChecked, Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.css']
})
export class NavBarItemComponent implements OnInit, DoCheck, AfterViewChecked {
  @Input() url: string;
  @Input() name: string;

  constructor() {
  }

  ngDoCheck(): void {
    console.log('NavbarItem Component ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log('NavbarItem Component AfterViewChecked');
  }

  ngOnInit() {
  }

}
