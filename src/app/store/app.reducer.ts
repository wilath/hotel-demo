import { ActionReducerMap } from '@ngrx/store';
import * as fromBlogList from './reducers/blog.reducer';
import * as fromLogin from './reducers/login.reducer';
import * as fromRooms from './reducers/rooms.reducer'
import * as fromReseravtions from './reducers/reservations.reducer'


export interface AppState {
  blog: fromBlogList.BlogState;
  login: fromLogin.LoginState;
  rooms: fromRooms.RoomsState;
  resevations: fromReseravtions.ReservationsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  blog: fromBlogList.blogReducer,
  login: fromLogin.loginReducer,
  rooms: fromRooms.roomsReducer,
  resevations: fromReseravtions.resevationsReducer
};
