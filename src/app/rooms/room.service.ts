import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, filter, pipe, take } from 'rxjs';
import { GuestInfo, Reservation } from '../shared/reservation.model';
import { Room } from '../shared/room.model';
import { premiumFacs, standardFacs } from '../shared/facilities';
import { Store } from '@ngrx/store';
import { roomsReducer } from '../store/reducers/rooms.reducer';
import { AppState } from '../store/app.reducer';
import { selectAllRooms } from '../store/selectors/rooms.selector';

@Injectable({
  providedIn: 'root',
})
export class RoomService implements OnInit {
  constructor(private store: Store<AppState>) {}

  reservation: Reservation = {
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none',
    roomId: 0,
    finalPrice: 0,
  };
  reservation$ = new Subject<Reservation>();
  selectedRoom: Room | undefined;

  pushReservation(reservation: any) {
    this.reservation = reservation;
    this.reservation$.next(this.reservation);
  }
  getReseravtion() {
    return this.reservation;
  }
  ngOnInit(): void {
    this.reservation$.next(this.reservation);
  }
  pushSelection(index: number) {
    this.store
      .select(selectAllRooms)
      .pipe(
        take(1),
        filter((rooms) => rooms && rooms.length > index)
      )
      .subscribe((rooms) => {
        this.selectedRoom = rooms[index];
      });
  }
  getSelectedRoom() {
    return this.selectedRoom;
  }
}
