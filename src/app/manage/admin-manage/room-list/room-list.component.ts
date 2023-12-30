import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room, Reservation } from 'src/app/shared';
import { AppState } from 'src/app/store/app.reducer';
import { selectAllReservations } from 'src/app/store/selectors/reservations.selector';
import { selectAllRooms } from 'src/app/store/selectors/rooms.selector';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {


  constructor( private store: Store<AppState>) { 
    this.rooms$ = this.store.select(selectAllRooms)
    this.reservations$ = this.store.select(selectAllReservations)
   }
 
   public rooms$: Observable<Room[]>;
   public reservations$: Observable<Reservation[]>;
  


  ngOnInit(): void {
  }

}
