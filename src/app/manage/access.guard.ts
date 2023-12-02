import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { selectLogin } from '../store/selectors/login.selector';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private router: Router,private store: Store<AppState>){
    
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectLogin).pipe(
      map((status)=>{
        if(status === 'admin' && route.url.toString() === 'admin-panel') {return true} else
        if(status === 'user' && route.url.toString() === 'user-panel') { return true} else {console.error('Access Denied'); return this.router.parseUrl('/main-page');}
      }),
      take(1)
    );
  }
  
}
