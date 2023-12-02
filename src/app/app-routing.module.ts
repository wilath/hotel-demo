import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './manage/access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full',
    data: { animation: 'main-page' },

  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule),
    data: { animation: 'main-page' },
  },
  {
    path: 'galery',
    loadChildren: () => import('./galery/galery.module').then(m => m.GaleryModule),
    data: { animation: 'galery' },
  },
  {
    path: 'rooms',
    loadChildren: () => import("./rooms/rooms.module").then(m => m.RoomsModule),
    data: { animation: 'rooms' },
  },
  {
    path: 'admin-panel',
    loadChildren: () => import("./manage/admin-manage/admin-manage.module").then(m => m.AdminManageModule),
    canActivate: [AccessGuard],
    
  },
  {
    path: 'user-panel',
    loadChildren: () => import("./manage/user-manage/user-manage.module").then(m => m.UserManageModule),
    canActivate: [AccessGuard],
    
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
