import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAdmin, loginUser } from '../store/actions/login.actions';
import { Observable } from 'rxjs';
import { selectLogin } from '../store/selectors/login.selector';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.login$ = this.store.select(selectLogin)
  
  }


  
  logAdmin(){
    this.store.dispatch(loginAdmin())
    this.hideTopMenu()
    document.body.classList.remove('disable-scroll')
  }

  logUser(){
    this.store.dispatch(loginUser())
    this.hideTopMenu()
    document.body.classList.remove('disable-scroll')
  }
  hideTopMenu(){
    document.querySelector('.app-login')?.classList.remove('show-app-login')
    setTimeout(()=>{document.querySelector('.app-login')?.classList.add('display-changer')},550)
  }

  ngOnInit(): void {
  }

}
