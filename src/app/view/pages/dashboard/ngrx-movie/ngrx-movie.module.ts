import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxMovieComponent } from './ngrx-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: NgrxMovieComponent,
  }
];

const MATERIAL = [
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCardModule
]


@NgModule({
  declarations: [
    NgrxMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MATERIAL,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgrxMovieModule { }
