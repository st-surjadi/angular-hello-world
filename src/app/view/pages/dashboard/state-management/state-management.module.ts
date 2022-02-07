import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateManagementComponent } from './state-management.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorMessageModule } from 'src/app/view/components/error-message/error-message.module';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: StateManagementComponent,
  }
];

@NgModule({
  declarations: [
    StateManagementComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ErrorMessageModule,
    MatIconModule
  ]
})
export class StateManagementModule { }
