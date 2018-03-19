import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '@actions/allbars.actions';
import { AllBarsState } from './app.states';

export const initialState: AllBarsState = {
  displayLoginForm: false,
  displayEventForm: false,
  currentEvent: null,
  currentTime: null
};

export function reducer(
  state = initialState,
  action: fromActions.All
): AllBarsState {
  switch (action.type) {
    case fromActions.DISPLAYEVENT: {
      return { ...state, displayEventForm: true };
    }
    case fromActions.NODISPLAYEVENT: {
      return { ...state, displayEventForm: false };
    }
    case fromActions.DISPLAY: {
      return { ...state, displayLoginForm: true };
    }
    case fromActions.NODISPLAY: {
      return { ...state, displayLoginForm: false };
    }
    default: {
      return state;
    }
  }
}

export const getAllBarsState = createFeatureSelector<AllBarsState>(
  'allBarsState'
);

export const getAllBarsStates = createSelector(
  getAllBarsState,
  (state: AllBarsState) => state
);
