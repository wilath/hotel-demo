import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoesComponent } from './photoes/photoes.component';
import { GaleryRoutingModule } from './galery.routing.module';
import { BlogItemComponent } from './photoes/blogItem/blogItem.component';



@NgModule({
  declarations: [
    PhotoesComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule
    
  ]
})
export class GaleryModule { }
