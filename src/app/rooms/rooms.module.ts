import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomItemComponent } from './rooms-list/room-item/room-item.component';
import { RoomsRoutingModule } from './rooms.routing.module';
import { FormsModule } from '@angular/forms';
import { sortRoomPipe } from './sort-rooms.pipe';
import { ConfirmResComponent } from './confirm-res/confirm-res.component';



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomItemComponent,
    sortRoomPipe,
    ConfirmResComponent
    
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule
    
  ]
})
export class RoomsModule { }
