import { createReducer, on } from "@ngrx/store";
import { AddMovie } from "../action/movie.action";
import { Movie } from "../model/movie.model";

const initialState: Movie[] = []

const _movieReducer = createReducer(
    initialState,
    on(AddMovie, (state, payload) => {
        return [...state, payload]
    }),
);

export function movieReducer(state: any, action: any) {
    return _movieReducer(state, action)
}