import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map, take } from 'rxjs';
import { logout } from '../store/actions/login.actions';
import { Router } from '@angular/router';
import { AppState } from '../store/app.reducer';
import { selectLogin } from '../store/selectors/login.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isLoged$: Observable<boolean>;
  public whosLogged$: Observable<string>;
  public isShown: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoged$ = this.store
      .select(selectLogin)
      .pipe(map((login: string) => login !== 'out'));
    this.whosLogged$ = this.store.select(selectLogin);
  }

  public ngOnInit(): void {}

  public log() {
    this.isLoged$.pipe(take(1)).subscribe((isLoged) => {
      if (isLoged) {
        this.store.dispatch(logout());
        this.router.navigate(['/main-page']);
      } else {
        document.querySelector('.app-login')?.classList.add('display-changer');
        setTimeout(() => {
          document.querySelector('.app-login')?.classList.add('show-app-login');
          document.body.classList.add('disable-scroll');
        }, 0);

        this.isShown = true;
      }
    });
  }
}
