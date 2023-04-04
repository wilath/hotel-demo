import { Injectable, OnInit } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { Reservation } from './reservation.model';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService implements OnInit {

  constructor() { }


  standardFacilities: Array<string> = [
    'Mini Bar', 'HairDryer','Air conditioning', "Wake-up call", "Bathrobe", 'Wi-fi',
    "Laundry facilities", "Iron and ironing board", "Slippers", "Fresh ground coffee and leaf tea", "In-room safe", 'Electric jug']

  premiumFacilities: Array<string> = ['In-room jacuzzi','Home Theater', 'Wine Fridge',]
  reservation: Reservation ={
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none'
  }
  reservation$ = new Subject<Reservation>()

  rooms:Array<Room> = [
    new Room('Family Bedroom',4,this.standardFacilities,'../../../assets/images/hotel-rooms/family-room.jpg', 35, 250),
    new Room('King Bedroom',2,this.standardFacilities,'../../../assets/images/hotel-rooms/king.jpg', 35, 290),
    new Room('Luxury Penthause',2,this.standardFacilities.concat(this.premiumFacilities),'../../../assets/images/hotel-rooms/penthause.jpg',41, 390),
    new Room('Couple beach cabin',2,["Wake-up call", "Bathrobe", 'Wi-fi','Electric jug','Mini Bar', 'HairDryer'],'../../../assets/images/hotel-rooms/beach.jpg',18, 310),
    new Room('Solo Luxury',1,this.standardFacilities.concat(this.premiumFacilities),'../../../assets/images/hotel-rooms/solo.jpg',33, 270),
    new Room('Group Room',4,this.standardFacilities,'../../../assets/images/hotel-rooms/group.jpg',29, 280)
  ]
  selectedRoom:number = 0;


  getRooms(){
    return this.rooms.slice()
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
