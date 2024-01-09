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
import { ShortenTextPipe } from 'src/app/shared/pipes/short-text-pipe';
import { RoomInfoComponent } from './room-list/room-info/room-info.component';
import { ReservationsPipe } from 'src/app/shared/pipes/reseravtion-by-id.pipe';
import { ShowHideDirective } from 'src/app/shared/directives/show-hide.directive';
import { DisableEnterDirective } from 'src/app/shared/directives/disable-enter-on-input.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminManageComponent,
    BlogEditComponent,
    RoomListComponent,
    ReservationsComponent,
    OccupancyComponent,
    BlogItemComponent,
    RoomInfoComponent, 
  ],
  imports: [
    CommonModule,
    AdminManageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AdminManageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class AdminManageModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
