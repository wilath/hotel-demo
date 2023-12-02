import { createReducer } from "@ngrx/store";
import { premiumFacs, standardFacs } from "src/app/shared/facilities";
import { Room } from "src/app/shared/room.model";

export interface RoomsState {
  rooms: Array<Room>
}


const initialState: RoomsState = {
  rooms: [
    new Room(1,'Family Bedroom',4,standardFacs,'../../../assets/images/hotel-rooms/family-room.jpg', 35, 250),
    new Room(2,'King Bedroom',2,standardFacs,'../../../assets/images/hotel-rooms/king.jpg', 35, 290),
    new Room(3,'Luxury Penthause',2,standardFacs.concat(premiumFacs),'../../../assets/images/hotel-rooms/penthause.jpg',41, 390),
    new Room(4,'Couple beach cabin',2,["Wake-up call", "Bathrobe", 'Wi-fi','Electric jug','Mini Bar', 'HairDryer'],'../../../assets/images/hotel-rooms/beach.jpg',18, 310),
    new Room(5,'Solo Luxury',1,standardFacs.concat(premiumFacs),'../../../assets/images/hotel-rooms/solo.jpg',33, 270),
    new Room(6,'Group Room',4,standardFacs,'../../../assets/images/hotel-rooms/group.jpg',29, 280)
  ]
} 

export const roomsReducer = createReducer(
    initialState,
    
);
