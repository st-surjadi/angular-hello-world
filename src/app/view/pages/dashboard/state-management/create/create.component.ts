import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Tutorial } from 'src/core/state-management/model/tutorial.model';
import { AppState } from 'src/core/state-management/state/app.state';
import { ValidationService } from 'src/helper/validation.service';
import * as TutorialAction from 'src/core/state-management/action/tutorial.action'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tutorialForm = new FormGroup({
    tutorialName: new FormControl('', [Validators.required, ValidationService.tutorialName]),
    tutorialUrl: new FormControl('', [Validators.required])
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTutorial() {
    let payload: Tutorial = {
      name: this.tutorialForm.get('tutorialName')!.value,
      url: this.tutorialForm.get('tutorialUrl')!.value
    }
    this.store.dispatch(TutorialAction.AddTutorial(payload));
    this.tutorialForm.reset();
  }

}
