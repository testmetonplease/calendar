import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Event } from '@models/event.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';
import { map, catchError } from 'rxjs/operators';
import * as fromEvents from '@actions/events.actions';
import { EventService } from '@providers/event-service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private eventService: EventService) {}

  @Effect()
  init$: Observable<Action> = defer(() => {
    return this.eventService
      .getEvents()
      .pipe(
        map((events: Event[]) => new fromEvents.InitEvents(events)),
        catchError(err => of(new fromEvents.InitEventsFail()))
      );
  });
}
