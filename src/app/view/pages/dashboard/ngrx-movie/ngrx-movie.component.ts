import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/core/state-management/model/movie.model';
import { AppState } from 'src/core/state-management/state/app.state';
import * as MovieAction from 'src/core/state-management/action/movie.action';

@Component({
  selector: 'app-ngrx-movie',
  templateUrl: './ngrx-movie.component.html',
  styleUrls: ['./ngrx-movie.component.scss']
})
export class NgrxMovieComponent implements OnInit {

  createMovieForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    earning: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  movies$: Observable<Movie[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.movies$ = this.store.select('movies');
  }

  ngOnInit(): void {
  }

  createMovie() {
    let payload = {
      name: this.createMovieForm.get('name')!.value,
      date: this.createMovieForm.get('date')!.value,
      earning: this.createMovieForm.get('earning')!.value,
    }
    this.store.dispatch(MovieAction.AddMovie(payload));
  }



}
