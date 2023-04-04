import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';
import { sortRoomPipe } from '../sort-rooms.pipe';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  constructor(private items: RoomService) { }
 
  ngOnInit(){
    setTimeout(()=>{this.revealText()}, 100)
    

    this.rooms = this.items.getRooms()
  }

  rooms:Array<Room> = []

  guestNumber:number = 1;
  
  formSubmitted = false;
  reservation = {
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none'
  }

  pGuest(){
    if(this.guestNumber === 4){return}
    this.guestNumber++
  
   
  }
  mGuest(){
    if(this.guestNumber === 1){return}
    this.guestNumber--
  }

  revealText(){
    var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.add("active"); 
      }
    }
    onSubmit(item: any){
      this.formSubmitted = true;
      item.promo === "happy"? this.reservation.promo = true : this.reservation.promo = false
      this.reservation.guests = item.guests;
      this.reservation.startDate = new Date (item.startDate);
      this.reservation.endDate = new Date (item.endDate);
      this.reservation.days = (this.reservation.endDate.getTime() - this.reservation.startDate.getTime())/(1000*60*60*24)
      this.reservation.food = item.food
      console.log(item)
      this.items.pushReservation(this.reservation)
    }
    


}
