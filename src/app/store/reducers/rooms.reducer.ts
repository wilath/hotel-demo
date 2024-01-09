import { createReducer, on } from '@ngrx/store';
import { premiumFacs, standardFacs } from 'src/app/shared/models/facilities';
import { Room } from 'src/app/shared/models/room.model';
import * as RoomActions from '../actions/rooms.actions';

export interface RoomsState {
  rooms: Array<Room>;
}

const initialState: RoomsState = {
  rooms: [
    new Room(
      1,
      'Family Bedroom',
      4,
      standardFacs,
      ['../../../assets/images/hotel-rooms/family-room.jpg'],
      35,
      250,
      10,
      1
    ),
    new Room(
      2,
      'King Bedroom',
      2,
      standardFacs,
      ['../../../assets/images/hotel-rooms/king.jpg'],
      35,
      290,
      4,
      0
    ),
    new Room(
      3,
      'Luxury Penthause',
      2,
      standardFacs.concat(premiumFacs),
      ['../../../assets/images/hotel-rooms/penthause.jpg'],
      41,
      390,
      2,
      0
    ),
    new Room(
      4,
      'Couple beach cabin',
      2,
      [
        'Wake-up call',
        'Bathrobe',
        'Wi-fi',
        'Electric jug',
        'Mini Bar',
        'HairDryer',
      ],
      ['../../../assets/images/hotel-rooms/beach.jpg'],
      18,
      310,
      5,
      2
    ),
    new Room(
      5,
      'Solo Luxury',
      1,
      standardFacs.concat(premiumFacs),
      ['../../../assets/images/hotel-rooms/solo.jpg'],
      33,
      270,
      4,
      0
    ),
    new Room(
      6,
      'Group Room',
      4,
      standardFacs,
      ['../../../assets/images/hotel-rooms/group.jpg'],
      29,
      280,
      10,
      5
    ),
  ],
};

export const roomsReducer = createReducer(
  initialState,
  on(RoomActions.addRoom, (state, { room }) => {
    const maxId = state.rooms.reduce(
      (max, room) => (room.id > max ? room.id : max),
      0
    );
    const newRoom = { ...room, id: maxId + 1 };
    const updatedRooms = [...state.rooms, newRoom];
    return { ...state, rooms: updatedRooms };
  }),
  on(RoomActions.editRoom, (state, { id, room }) => {
    const newRooms = state.rooms.map((exRoom) => {
      if (exRoom.id === id) {
        return room;
      } else {
        return exRoom;
      }
    });
    return { ...state, rooms: newRooms };
  }),
  on(RoomActions.deleteRoom, (state, {id}) => {
    const newRooms = state.rooms.filter((exRoom)=> exRoom.id !== id)
    return {...state, rooms: newRooms}
  })
);
