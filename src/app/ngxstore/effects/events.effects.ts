import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { EventService } from '@providers/event-service';
import * as fromEventsActions from '@actions/events.actions';
import { Event } from '@models/event.model';
import {
  debounceTime,
  map,
  switchMap,
  skip,
  takeUntil,
  catchError
} from 'rxjs/operators';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class Eventsffects {
  constructor(
    private actions$: Actions,
    private eventService: EventService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}

  /*  @Effect()
  addOneEvent$: Observable<Action> = this.actions$.pipe(
    ofType<fromEventsActions.AddOneEvent>(fromEventsActions.AddOneEvent),
    map(action => action.payload),
    switchMap(time => {
    
      console.log(time);
      return empty();
    })
  );*/
}
