import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { RoomsState } from '../reducers/rooms.reducer';


export const selectAppState = (state: AppState) => state.rooms; 

export const selectAllRooms = createSelector(
  selectAppState, 
  (state: RoomsState) => state.rooms
);

