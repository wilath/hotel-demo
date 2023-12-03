import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../../../shared/reservation.model';
import { Room } from '../../../shared/room.model';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css'],
})
export class RoomItemComponent implements OnInit {
  constructor(private service: RoomService) {}

  @Input() room?: Room;
  @Input() index!: number;

  feeding: 'all' | 'breakfast' | 'none' = 'none';
  applied: boolean = false;
  facs: Array<string> | undefined;
  reservation: Reservation = {
    promo: false,
    guests: 1,
    startDate: new Date(),
    endDate: new Date(),
    days: 0,
    food: 'none',
  };
  totalPrice: number = 0;

  ngOnInit() {
    this.facs = this.room?.facilities;
    this.service.reservation$.subscribe((data) => {
      if (data) {
        this.reservation = data;
        this.applied = true;
        this.countTotalPrice();
      }
    });
  }

  selectRoom() {
    this.service.pushSelection(this.index!);
  }

  countTotalPrice() {
    let price: number = 0;
    switch (this.reservation.food) {
      case 'none':
        price = this.reservation.days * this.room!.price;
        break;
      case 'all':
        price =
          this.reservation.days *
          (this.room!.price + this.reservation.guests * 40);
        break;
      case 'only':
        price = price =
          this.reservation.days *
          (this.room!.price + this.reservation.guests * 15);
        break;
      default:
        price = price =
          this.reservation.days *
          (this.room!.price + this.reservation.guests * 15);
    }
    if (this.reservation.promo) {
      price = price * 0.8;
    }
    this.totalPrice = price;
  }
}
