// room-reservations.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Reservation } from './reservation.model';

@Pipe({
  name: 'reservationsById'
})
export class ReservationsPipe implements PipeTransform {
  transform(reservations: Reservation[] | null, id: number | null): Reservation[] {
    if (!reservations || id === null) {
      return [];
    }

    return reservations.filter(reservation => reservation.roomId === id);
  }
}
