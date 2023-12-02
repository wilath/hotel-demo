import { createReducer, on } from "@ngrx/store";
import * as loginActions from "../actions/login.actions";


export interface LoginState {
  login: string
}

const initialState: LoginState =  {
  login: localStorage.getItem('loginItem')?.toString() || 'out'
} 


export const loginReducer = createReducer(
    initialState,
    on(loginActions.logout, (state) => {
        localStorage.setItem('loginItem', 'out'); // Update localStorage value
        return {...state, login: 'out'}; // Update state value
      }),
      on(loginActions.loginAdmin, (state) => {
        localStorage.setItem('loginItem', 'admin'); // Update localStorage value
        return {...state, login: 'admin'}; // Update state value
      }),
      on(loginActions.loginUser, (state) => {
        localStorage.setItem('loginItem', 'user'); // Update localStorage value
        return {...state, login: 'user'}; // Update state value
      })
  
);

