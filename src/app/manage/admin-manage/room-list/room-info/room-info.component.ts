import { Component, Input, OnInit } from '@angular/core';
import { Reservation, Room } from 'src/app/shared';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrl: '../room-list.component.css',
})
export class RoomInfoComponent implements OnInit {
  constructor() {
    this.reservations = []
  }
  
  @Input() room!: Room ;
  @Input() reservations: Reservation[] | null;
  isShowReservation: boolean = false;
  
  

  ngOnInit(): void {
   
  }
}
