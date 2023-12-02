import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { LoginState } from '../reducers/login.reducer';


export const selectAppState = (state: AppState) => state.login; 

export const selectLogin = createSelector(
  selectAppState, 
  (state: LoginState) => state.login
);