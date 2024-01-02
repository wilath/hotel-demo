import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManageComponent } from './admin-manage.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BlogItemComponent } from './blog-edit/blog-item/blog-item.component';
import { BlogItemResolver } from './blog-edit/blog-item/blog-item-resolver';


const routes: Routes = [
  { path: '',
    component: AdminManageComponent,
    children: [
      { 
        path: 'blog-edit',
        component: BlogEditComponent,
        children: [
          {
             path: ':id',
            component: BlogItemComponent,
            resolve: [BlogItemResolver]
          },
          {
            path: 'new',
            component: BlogItemComponent
          },
          {
            path: '',
            redirectTo: 'admin-panel//blog-edit/new',
            pathMatch: 'full'
          }
        ]},
      { 
        path: 'occupancy',
        component:OccupancyComponent
      },
      { 
        path:'reservations',
        component:ReservationsComponent
      },
      { 
        path:'room-list',
        component:RoomListComponent
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})


export class AdminManageRoutingModule { }
