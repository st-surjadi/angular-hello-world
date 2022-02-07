import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxMovieComponent } from './ngrx-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: NgrxMovieComponent,
  }
];

const MATERIAL = [
  MatFormField
]


@NgModule({
  declarations: [
    NgrxMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxMovieModule { }
