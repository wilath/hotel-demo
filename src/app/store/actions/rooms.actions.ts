import { createAction, props } from "@ngrx/store";
import { Room } from "src/app/shared";

export const addRoom = createAction(
    '[Room] Add',
    props<{room: Room}>()
)

export const deleteRoom = createAction(
    '[Room] Delete',  
    props<{id:number}>()
)

export const editRoom = createAction(
    '[Room] Edit',
    props<{id: number, room: Room}>()
);
