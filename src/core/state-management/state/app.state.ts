import { Tutorial } from "../model/tutorial.model";


export interface AppState {
    readonly tutorials: Tutorial[];
}