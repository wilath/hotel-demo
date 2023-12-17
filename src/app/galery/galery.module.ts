import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoesComponent } from './photoes/photoes.component';
import { GaleryRoutingModule } from './galery.routing.module';
import { BlogItemComponent } from './photoes/blogItem/blogItem.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';



@NgModule({
  declarations: [
    PhotoesComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule,
    CarouselComponent
    
  ]
})
export class GaleryModule { }
