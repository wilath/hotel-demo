import { createAction, props } from "@ngrx/store";
import { Reservation } from "src/app/shared";

export const addReservation = createAction(
    '[Reservation] AddReservation',
    props<{ reservation: Reservation }>() // Dodajemy props z obiektem typu BlogPost
  );
  
  export const editReservation = createAction(
    '[Reservation] EditReservation',
    props<{ id: number; reservation: Reservation }>() // Dodajemy props z id posta oraz obiektem typu BlogPost
  );
  
  export const deleteReservation = createAction(
    '[Reservation] DeleteReservation',
    props<{ id: number | undefined }>() // Dodajemy props z id posta
  );