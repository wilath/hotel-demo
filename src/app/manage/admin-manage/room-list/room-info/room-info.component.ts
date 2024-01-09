import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Reservation, Room } from 'src/app/shared';
import { editRoom } from 'src/app/store/actions/rooms.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrl: './room-info.component.css',
})
export class RoomInfoComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.reservations = [];
  }

  @Input({ required: true }) room!: Room;
  @Input({ required: true }) reservations: Reservation[] | null;
  public isShowReservation: boolean = false;
  public isEditMode: boolean = false;
  public editRoom!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }
 
  public switchEditMode(){
    if(this.isEditMode) { 
      this.isEditMode = !this.isEditMode
      this.initializeForm()
      
    } else {
      this.isEditMode = !this.isEditMode
    }

  }
  public initializeForm() {
    let name = '';
    let quantity = 0;
    let cap = 0;
    let area = 0;
    let price = 0;
    let facs = new FormArray<FormControl>([]);
    let photos = new FormArray<FormControl>([]);
    if (this.room) {
      name = this.room.name;
      quantity = this.room.quantity;
      cap = this.room.capacity;
      area = this.room.area;
      price = this.room.price;
      for (const fac of this.room.facilities) {
        facs.push(this.fb.control(fac));
      }
      for (const pho of this.room.imagePath) {
        photos.push(this.fb.control(pho));
      }
    }
    this.editRoom = this.fb.group({
      name: name,
      quantity: quantity,
      cap: cap,
      area: area,
      price: price,
      facs: facs,
      photos: photos,
    });
  }

  public getControls(type: string) {
    if (type === 'facs') {
      return this.editRoom.get('facs') as FormArray;
    } else {
      return this.editRoom.get('photos') as FormArray;
    }
  }

  public addElement(type: string) {
    const newElement = this.fb.control(null);
    this.getControls(type).push(newElement);
  }

  public removeElement(index: number, type: string) {
    const content = this.editRoom.get(type) as FormArray;
    content.removeAt(index);
  }
  public deleteRoom() {}

  public onSubmit() {
    const newRoom : Room =  {
      id: this.room.id,
      name: this.editRoom.value.name,
      capacity: this.editRoom.value.cap,
      facilities: this.editRoom.value.facs,
      imagePath: this.editRoom.value.photos,
      area: this.editRoom.value.area,
      quantity: this.editRoom.value.quantity,
      price: parseInt(this.editRoom.value.price,10)
    }

    this.store.dispatch(editRoom({id: this.room.id, room: newRoom}))
    this.isEditMode = !this.isEditMode
  }
}
