import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Reservation, Room } from 'src/app/shared';
import { AppState } from 'src/app/store/app.reducer';
import { selectAllReservations } from 'src/app/store/selectors/reservations.selector';
import { selectAllRooms } from 'src/app/store/selectors/rooms.selector';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor( private store: Store<AppState>) { 
   this.rooms$ = this.store.select(selectAllRooms)
   this.reservations$ = this.store.select(selectAllReservations)
  }

  public rooms$: Observable<Room[]>;
  public reservations$: Observable<Reservation[]>;

  ngOnInit(): void {
  }

}
