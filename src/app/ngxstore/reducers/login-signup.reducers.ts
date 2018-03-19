import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '@actions/login-signup.actions';
import { LoginSignUPState } from '@reducers/app.states';
import { User } from '@models/user.model';

export const initialUser: User = {
  uid: null,
  email: null,
  hash: null,
  name: null,
  role: null,
  lastVisit: null
};

export const initialState: LoginSignUPState = {
  login: true,
  signUp: false,
  reset: false,
  user: initialUser
};

export function reducer(
  state = initialState,
  action: fromActions.All
): LoginSignUPState {
  switch (action.type) {
    case fromActions.LOGIN_SUCCESS: {
      console.log('я в редьюсере');
      console.log(action.payload.user);
      return {
        ...state,
        login: true,
        signUp: false,
        reset: false,
        user: action.payload.user
      };
    }
    case fromActions.LOGOUT: {
      return {
        ...state,
        login: true,
        signUp: false,
        reset: false,
        user: initialUser
      };
    }
    case fromActions.USERCHANGE: {
      return { ...state, user: action.payload.user };
    }

    case fromActions.LOGINFORMA: {
      return { ...state, login: true, signUp: false, reset: false };
    }
    case fromActions.SIGNUPFORMA: {
      return { ...state, login: false, signUp: true, reset: false };
    }
    case fromActions.RESETPASSFORMA: {
      return { ...state, login: false, signUp: false, reset: true };
    }
    default: {
      return state;
    }
  }
}

export const getloginSignUPState = createFeatureSelector<LoginSignUPState>(
  'loginSignUPState'
);

export const getloginSignUPStates = createSelector(
  getloginSignUPState,
  (state: LoginSignUPState) => state
);

export const getloginUser = createSelector(
  getloginSignUPState,
  (state: LoginSignUPState) => state.user
);
