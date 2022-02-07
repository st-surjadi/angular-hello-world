import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { NgrxMovieComponent } from './ngrx-movie/ngrx-movie.component';


const Material = [
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NgrxMovieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    Material,
    FormsModule
  ]
})
export class DashboardModule { }
