import { Injectable, OnInit } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { Reservation } from '../shared/reservation.model';
import { Room } from '../shared/room.model';
import { premiumFacs, standardFacs } from '../shared/facilities';
import { Store } from '@ngrx/store';
import { roomsReducer } from '../store/reducers/rooms.reducer';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class RoomService implements OnInit {

  constructor(private store: Store<AppState>) { 
   

  }

 

  reservation: Reservation ={
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none'
  }
  reservation$ = new Subject<Reservation>()



  selectedRoom:number = 0;


  getRooms(){
    
  }
  pushReservation(reservation: any){
    this.reservation = reservation
    this.reservation$.next(this.reservation)
  }
  getReseravtion(){
    return this.reservation;
  }
  ngOnInit(): void {
    this.reservation$.next(this.reservation)
  }
  pushSelection(index:number){
    this.selectedRoom = index
    
  }
  getSelectedRoom(){
    return this.selectedRoom
  }
  
}
