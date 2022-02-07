import { createAction, props } from "@ngrx/store";
import { Tutorial } from "../model/tutorial.model";

export const AddTutorial = createAction(
    '[TUTORIAL] Add',
    (payload: Tutorial) => payload
)

export const RemoveTutorial = createAction(
    '[TUTORIAL] Remove',
    (payload: {index: number}) => payload
)
