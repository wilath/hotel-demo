import { createReducer, on } from "@ngrx/store";
import { GuestInfo, Reservation } from "src/app/shared";
import * as ReservationActions from "../actions/resevations.actions"


export interface ReservationsState {
  reservations: Array<Reservation>
}


const initialState: ReservationsState = {
    reservations: [
    new Reservation(true, 2, new Date(), new Date(), 2, 'all', 5343,1, new GuestInfo('Erick','Brown','Mr','eric@ex.com','5523523'),0),
    new Reservation(false, 3, new Date(), new Date(), 4, 'only',1934,1, new GuestInfo('Adam','Hirsch','Mr','eadadc@ex.com','5523523'),1),
    new Reservation(true, 4, new Date(), new Date(), 7, 'only',4999,1, new GuestInfo('Samantha','Newman','Mrs','sam@ex.com','5523523'),2),
    new Reservation(true, 5, new Date(), new Date(), 6, 'all',2100,1, new GuestInfo('Victoria','Orlando','Mr','vic@ex.com','5523523'),3),
   

  ]
} 

export const reservationsReducer = createReducer(
  initialState,
  on(ReservationActions.addReservation, (state, { reservation }) => {
    const updatedRes = [...state.reservations, reservation]; // Dodaj nowy post na koniec listy
    return { ...state, reservations: updatedRes };
  }),
  on(ReservationActions.deleteReservation, (state, action) => {
    const updatedRes = state.reservations.filter((p) => p.resId !== action.id);
    return { ...state, reservations: updatedRes };
  }),
  on(ReservationActions.editReservation, (state, { id, reservation }) => {
    const updatedRes = state.reservations.map((existingRes) => {
      if (existingRes.resId === id) {
        return reservation;
      }
      return existingRes;
    });

    return { ...state, reservations: updatedRes };
  })
);
