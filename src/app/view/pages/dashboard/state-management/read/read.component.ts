import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveTutorial } from 'src/core/state-management/action/tutorial.action';
import { Tutorial } from 'src/core/state-management/model/tutorial.model';
import { AppState } from 'src/core/state-management/state/app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.tutorials = store.select('tutorials');
  }

  ngOnInit(): void {
  }

  remove(index: number) {
    this.store.dispatch(RemoveTutorial({index: index}));
  }

}
