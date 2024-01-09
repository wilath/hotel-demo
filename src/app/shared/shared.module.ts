import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHideDirective } from './directives/show-hide.directive';
import { ShortenTextPipe } from './pipes/short-text-pipe';
import { ReservationsPipe } from './pipes/reseravtion-by-id.pipe';
import { DisableEnterDirective } from './directives/disable-enter-on-input.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowHideDirective,
    ShortenTextPipe,
    ReservationsPipe,
    DisableEnterDirective,
    CarouselComponent
    
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ShowHideDirective,
    ShortenTextPipe,
    ReservationsPipe,
    DisableEnterDirective,
    CarouselComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
