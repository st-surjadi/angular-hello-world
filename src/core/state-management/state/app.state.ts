import { Movie } from "../model/movie.model";
import { Tutorial } from "../model/tutorial.model";


export interface AppState {
    readonly tutorials: Tutorial[];
    readonly movies: Movie[];
}