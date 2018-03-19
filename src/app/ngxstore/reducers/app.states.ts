import { User } from '@models/user.model';
import { Event } from '@models/event.model';
import { EntityState } from '@ngrx/entity';

export interface AppState {
  allBarsState: AllBarsState;
  loginSignUPState: LoginSignUPState;
  eventFormState: EventFormState;
  eventsState: EventsState;
}

export interface AllBarsState {
  displayLoginForm: boolean;
  displayEventForm: boolean;
  currentEvent: Event;
  currentTime: string;
}
export interface LoginSignUPState {
  login: boolean;
  signUp: boolean;
  reset: boolean;
  user: User;
}

export interface EventFormState {
  open: boolean;
}
export interface EventsState extends EntityState<Event> {}
