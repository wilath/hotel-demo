import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHideDirective } from './show-hide.directive';
import { Room } from './room.model';
import { ShortenTextPipe } from './short-text-pipe';
import { Reservation } from './reservation.model';
import { ReservationsPipe } from './reseravtion-by-id.pipe';
import { premiumFacs, standardFacs } from './facilities';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
