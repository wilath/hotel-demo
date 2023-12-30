import { createReducer } from "@ngrx/store";
import { Reservation } from "src/app/shared";
import { Room } from "src/app/shared/room.model";

export interface ReservationsState {
  reservations: Array<Reservation>
}


const initialState: ReservationsState = {
    reservations: [
    new Reservation(true, 2, new Date(), new Date(), 3, 'all', 3)
  ]
} 

export const resevationsReducer = createReducer(
    initialState,
    
);
