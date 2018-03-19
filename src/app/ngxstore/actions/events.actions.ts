import { Action } from '@ngrx/store';
import { Event } from '@models/event.model';

export const ADD_ONE = '[Event] Add One';
export const UPDATE_ONE = '[Event] Update One';
export const UPDATE_MANY = 'Events Update';
export const DELETE_ONE = '[Event] Delete One';
export const GET_ALL = 'Get All';
export const INIT_EVENTS = 'Init Events';
export const INIT_EVENTS_FAIL = 'Init Events Fail';

export class AddOneEvent implements Action {
  readonly type = ADD_ONE;
  constructor(public event: Event) {}
}

export class UpdateOneEvent implements Action {
  readonly type = UPDATE_ONE;
  constructor(public id: string, public changes: Partial<Event>) {}
}
export class UpdateManyEvents implements Action {
  readonly type = UPDATE_MANY;
  constructor(public payload: { id: string; changes: Partial<Event> }[]) {}
}

export class DeleteOneEvent implements Action {
  readonly type = DELETE_ONE;
  constructor(public id: string) {}
}

export class GetAllEvents implements Action {
  readonly type = GET_ALL;
  constructor(public events: Event[]) {}
}
export class InitEvents implements Action {
  readonly type = INIT_EVENTS;
  constructor(public events: Event[]) {}
}
export class InitEventsFail implements Action {
  readonly type = INIT_EVENTS_FAIL;
}

export type All =
  | AddOneEvent
  | UpdateOneEvent
  | UpdateManyEvents
  | DeleteOneEvent
  | GetAllEvents
  | InitEventsFail
  | InitEvents;
