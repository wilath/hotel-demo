import { Component, OnInit, Query, QueryList, ViewChildren } from '@angular/core';
import { Reservation } from '../../shared/reservation.model';
import { RoomService } from '../room.service';
import { Room } from '../../shared/room.model';


@Component({
  selector: 'app-confirm-res',
  templateUrl: './confirm-res.component.html',
  styleUrls: ['./confirm-res.component.css']
})
export class ConfirmResComponent implements OnInit {

  constructor(private items: RoomService) {}
  
  room!: Room;
  res: Reservation = {
      promo: false,
      guests: 1,
      startDate: new Date(),
      endDate: new Date(),
      days: 0,
      food: 'none'
    }
  catering: string = "None";
  cateringCost: number = 0;
  roomCost: number = 0;
  totalPrice: number = 0;
  savings: number = 0;
  finalPrice: number = 0;
  


  ngOnInit(){
   //this.room = this.items.getRooms()[this.items.getSelectedRoom()]
   this.res = this.items.getReseravtion();
   this.countAll();
   if(this.finalPrice !== 0){this.local()}
   if(this.finalPrice === 0){
    const rd = localStorage.getItem('data');
    if (rd !== null) {
      
      const data = JSON.parse(rd);
      this.catering = data.catering;
      this.cateringCost = data.cateringCost;
      this.roomCost = data.roomCost;
      this.totalPrice = data.totalPrice;
      this.savings = data.savings;
      this.finalPrice = data.finalPrice;
      this.res.startDate = data.startDate;
      this.res.endDate = data.endDate;
      this.res.guests = data.guests;
      this.room.name = data.roomName;

      
      
    } else {
    
      console.error('reservationData is null');
    }

   }
  
  }




  countAll(){

    if(this.res.food === "none")
    {
      this.catering =  "none"}else if(this.res.food === "all")
    {
      this.catering = "All-Inclusive";
      this.cateringCost = 40 * this.res.guests * this.res.days}else
    {
      this.catering = "Only breakfast"
      this.cateringCost = 15 * this.res.guests * this.res.days
    }

      this.roomCost = this.res.days * this.room.price;
      this.totalPrice = this.roomCost + this.cateringCost;

      if(this.res.promo){
        this.savings = this.totalPrice * 0.2
        this.finalPrice = this.totalPrice - this.savings
      }else{
        this.finalPrice = this.totalPrice;
      }
  }
  titleFun(n: number){

      const buttons = Array.from(document.getElementsByClassName('btn-t') as HTMLCollectionOf<HTMLElement>)
      for(let i = 0; i < 4; i++){
        buttons[i].style.backgroundColor = "var(--color-secondary)"
        buttons[n].style.backgroundColor = "var(--color-third)"
      }
  }
  
  local(){
    const resObject = {
      finalPrice: this.finalPrice,
      totalPrice: this.totalPrice,
      savings: this.savings,
      roomCost: this.roomCost,
      cateringCost: this.cateringCost,
      catering: this.catering,
      roomName: this.room.name,
      guests: this.res.guests,
      startDate: this.res.startDate,
      endDate: this.res.endDate
      
    }
    const resData = JSON.stringify(resObject)


    const local = localStorage.setItem('data',resData)
  
  }
}