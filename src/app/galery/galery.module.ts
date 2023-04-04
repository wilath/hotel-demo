import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoesComponent } from './photoes/photoes.component';
import { GaleryRoutingModule } from './galery.routing.module';



@NgModule({
  declarations: [
    PhotoesComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule
    
  ]
})
export class GaleryModule { }
