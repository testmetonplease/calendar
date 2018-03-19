import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.states';
import * as allBarsReducer from './allbars.reducers';
import * as loginSignUpReducer from './login-signup.reducers';
import * as eventsReducer from './events.reducers';

import * as eventFormReducer from './truck-event-dialog.reducers';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  allBarsState: allBarsReducer.reducer,
  loginSignUPState: loginSignUpReducer.reducer,
  eventFormState: eventFormReducer.reducer,
  eventsState: eventsReducer.reducer
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
