import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Room } from '../../shared/room.model';
import { RoomService } from '../room.service';
import { sortRoomPipe } from '../sort-rooms.pipe';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllRooms } from 'src/app/store/selectors/rooms.selector';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
  constructor(private items: RoomService, private store: Store<AppState>) {
    this.rooms$ = this.store.select(selectAllRooms);
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.revealText();
    }, 100);
  }

  rooms$: Observable<Room[]>;
  guestNumber: number = 1;
  formSubmitted = false;
  reservation = {
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none',
  };

  pGuest() {
    if (this.guestNumber === 4) {
      return;
    }
    this.guestNumber++;
  }
  mGuest() {
    if (this.guestNumber === 1) {
      return;
    }
    this.guestNumber--;
  }

  revealText() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add('active');
    }
  }

  onSubmit(item: any) {
    this.formSubmitted = true;
    item.promo === 'happy'
      ? (this.reservation.promo = true)
      : (this.reservation.promo = false);
    this.reservation.guests = item.guests;
    this.reservation.startDate = new Date(item.startDate);
    this.reservation.endDate = new Date(item.endDate);
    this.reservation.days =
      (this.reservation.endDate.getTime() -
        this.reservation.startDate.getTime()) /
      (1000 * 60 * 60 * 24);
    this.reservation.food = item.food;
    this.items.pushReservation(this.reservation);
  }
}
