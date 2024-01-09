import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoesComponent } from './photoes/photoes.component';
import { GaleryRoutingModule } from './galery.routing.module';
import { BlogItemComponent } from './photoes/blogItem/blogItem.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PhotoesComponent,
    BlogItemComponent
  ],
  imports: [
    GaleryRoutingModule,
    SharedModule

  ]
})
export class GaleryModule { }
