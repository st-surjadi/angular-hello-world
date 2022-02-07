import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  events: string[] = [];
  opened: boolean = false;

  navList = [
    { name: 'Home', link: 'home' },
    { name: 'NgRx Tutorial', link: 'state-management' },
    { name: 'NgRx Movie', link: 'ngrx-movie' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    
  }

  closeSidebar() {

  }

  //Komen

}
