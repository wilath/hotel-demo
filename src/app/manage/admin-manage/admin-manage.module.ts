import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManageRoutingModule } from './admin-manage-routing.module';
import { AdminManageComponent } from './admin-manage.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { RoomListComponent } from './room-list/room-list.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { BlogItemComponent } from './blog-edit/blog-item/blog-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenTextPipe } from 'src/app/shared/short-text-pipe';
import { RoomInfoComponent } from './room-list/room-info/room-info.component';
import { ReservationsPipe } from 'src/app/shared/reseravtion-by-id.pipe';
import { ShowHideDirective } from 'src/app/shared/show-hide.directive';


@NgModule({
  declarations: [
    AdminManageComponent,
    BlogEditComponent,
    RoomListComponent,
    ReservationsComponent,
    OccupancyComponent,
    BlogItemComponent,
    ShortenTextPipe,
    RoomInfoComponent,
    ReservationsPipe,
    ShowHideDirective
  
    
  ],
  imports: [CommonModule, AdminManageRoutingModule, ReactiveFormsModule, ],
  providers: [],
  bootstrap: [AdminManageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ShowHideDirective]
})
export class AdminManageModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
