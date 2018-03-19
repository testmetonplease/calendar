import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '@actions/truck-event-dialog.actions';
import { EventFormState } from './app.states';

export const initialState: EventFormState = { open: false };

export function reducer(
  state = initialState,
  action: fromActions.All
): EventFormState {
  switch (action.type) {
    case fromActions.EVENTOPEN: {
      return { ...state, open: true };
    }
    case fromActions.EVENTCLOSE: {
      return { ...state, open: false };
    }
    default: {
      return state;
    }
  }
}

export const getEventFormState = createFeatureSelector<EventFormState>(
  'eventFormState'
);
