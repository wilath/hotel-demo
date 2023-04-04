import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';

import { mainPageRoutingModule } from './main-page.roututing.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';



@NgModule({
  declarations: [
    InfoComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    mainPageRoutingModule,
    
  ]
})
export class MainPageModule { }
