import { createSelector, createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Event } from '@models/event.model';
import * as fromActions from '@actions/events.actions';
import { EventsState } from './app.states';

export const eventAdapter: EntityAdapter<Event> = createEntityAdapter<Event>({
  sortComparer: sortByStartTime
});

export const initialState: EventsState = eventAdapter.getInitialState({});

export function reducer(
  state = initialState,
  action: fromActions.All
): EventsState {
  switch (action.type) {
    case fromActions.ADD_ONE:
      return eventAdapter.addOne(action.event, state);
    case fromActions.UPDATE_ONE:
      return eventAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );
    case fromActions.UPDATE_MANY:
      console.log('i am in reducer');
      console.log(action.payload);
      return eventAdapter.updateMany(
        action.payload.map(event =>
          Object.assign({}, { id: event.id, changes: event.changes })
        ),
        { ...state }
      );
    case fromActions.DELETE_ONE:
      return eventAdapter.removeOne(action.id, state);
    case fromActions.GET_ALL:
      return eventAdapter.addAll(action.events, state);
    case fromActions.INIT_EVENTS:
      console.log(action.events);
      return eventAdapter.addAll(action.events, state);
    default:
      return state;
  }
}

export function sortByStartTime(event1: Event, event2: Event): number {
  return event1.start.localeCompare(event2.start);
}

export const getEventsState = createFeatureSelector<EventsState>('eventsState');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = eventAdapter.getSelectors();

export const selectEventIds = createSelector(getEventsState, selectIds);
export const selectEventEntities = createSelector(
  getEventsState,
  selectEntities
);

export const selectAllEvents = createSelector(getEventsState, selectAll);
export const selectEventCount = createSelector(getEventsState, selectTotal);

export const getEventsStateAll = createSelector(
  getEventsState,
  (state: EventsState) => state
);
export const getEventsEntities = createSelector(
  getEventsState,
  (state: EventsState) => state.entities
);
