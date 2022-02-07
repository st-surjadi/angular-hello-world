import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'state-management',
        loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
      },
      {
        path: 'ngrx-movie',
        loadChildren: () => import('./ngrx-movie/ngrx-movie.module').then(m => m.NgrxMovieModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }