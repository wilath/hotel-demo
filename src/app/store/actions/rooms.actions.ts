import { createAction } from "@ngrx/store";

export const addRoom = createAction(
    '[Room] Add',
)

export const deleteRoom = createAction(
    '[Room] Delete',  
)

export const editRoom = createAction(
    '[Room] Edit',
);
