import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLogin } from './store/selectors/login.selector';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {

  constructor(private store: Store<AppState>){
    this.login$ = this.store.select(selectLogin)

    
  }


  title = 'hotel-demo';
  login$: Observable<string>;

  

}
