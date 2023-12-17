import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLogin } from './store/selectors/login.selector';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoadingDone: boolean = false;

  constructor(private store: Store<AppState>) {
    this.login$ = this.store.select(selectLogin);
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoadingDone = true;
    }, 2500);
  }

  title = 'hotel-demo';
  login$: Observable<string>;
}
