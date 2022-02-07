import { createAction, props } from "@ngrx/store";
import { Movie } from "../model/movie.model";


export const AddMovie = createAction(
    '[ADD] Movie',
    // props<{payload: Movie}>()
    (payload: Movie) => payload
)