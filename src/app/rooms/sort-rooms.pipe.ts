import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../shared/room.model';

@Pipe({name: 'sortRooms'})
export class sortRoomPipe implements PipeTransform {
    transform(room: Room, guests: number): boolean {
        return room.capacity >= guests;
      }
  }
