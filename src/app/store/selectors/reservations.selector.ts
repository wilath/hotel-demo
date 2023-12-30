import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { RoomsState } from '../reducers/rooms.reducer';
import { ReservationsState } from '../reducers/reservations.reducer';


export const selectAppState = (state: AppState) => state.resevations; 

export const selectAllReservations = createSelector(
  selectAppState, 
  (state: ReservationsState) => state.reservations
);

