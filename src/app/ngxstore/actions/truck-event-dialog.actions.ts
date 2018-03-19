import { Action } from '@ngrx/store';

export const EVENTOPEN = 'EVENT FORM OPEN';
export const EVENTCLOSE = 'EVENT FORM ClOSE';
export const EVENTUPDATE = 'EVENT FORM UPDATE';

export class EventFormOpenAction implements Action {
  readonly type = EVENTOPEN;
}

export class EventFormCloseAction implements Action {
  readonly type = EVENTCLOSE;
}

export type All = EventFormOpenAction | EventFormCloseAction;
