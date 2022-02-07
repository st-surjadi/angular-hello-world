import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { AddTutorial, RemoveTutorial } from '../action/tutorial.action';
import { Tutorial } from '../model/tutorial.model';

const initialState: Tutorial[] = [
    { name: 'Initial Tutorial', url: 'https://google.com'}
]

const _tutorialReducer = createReducer(
    initialState,
    on(AddTutorial, (state, payload) => {
        return [...state, payload]
    }),
    on(RemoveTutorial, (state, payload) => {
        const newState = [...state];
        newState.splice(payload.index, 1);
        return newState;
    })
);

export function tutorialReducer(state: any, action: any) {
    return _tutorialReducer(state, action)
}