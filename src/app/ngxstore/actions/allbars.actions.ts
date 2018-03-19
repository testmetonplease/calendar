import { Action } from '@ngrx/store';

export const NODISPLAYEVENT = 'NO_DISPLAY_EVENT_FORM';
export const DISPLAYEVENT = 'DISPLAY_EVENT_FORM';
export const DISPLAY = 'DISPLAY_LOGIN_FORM';
export const NODISPLAY = 'NO_DISPLAY_LOGIN_FORM';

export class DisplayEventAction implements Action {
  readonly type = DISPLAYEVENT;
}

export class NoDisplayEventAction implements Action {
  readonly type = NODISPLAYEVENT;
}

export class DisplayAction implements Action {
  readonly type = DISPLAY;
}

export class NoDisplayAction implements Action {
  readonly type = NODISPLAY;
}

export type All =
  | DisplayEventAction
  | NoDisplayEventAction
  | DisplayAction
  | NoDisplayAction;
