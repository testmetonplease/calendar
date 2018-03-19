import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AllBarsState, EventsState } from '@reducers/app.states';
import * as AllBarsReducer from '@reducers/allbars.reducers';
import * as fromAllBarsActions from '@actions/allbars.actions';
import * as fromEventsActions from '@actions/events.actions';
import * as fromEvents from '../../ngxstore/reducers/events.reducers';
import { Observable } from 'rxjs/Observable';
import { Event } from '@models/event.model';

@Component({
  selector: 'app-truck-event-dialog',
  templateUrl: './truck-event-dialog.component.html',
  styleUrls: ['./truck-event-dialog.component.scss']
})
export class TruckEventDialogComponent implements OnInit {
  eventForm: FormGroup;
  allBars$: Observable<AllBarsState>;

  constructor(
    private fb: FormBuilder,
    private allbarstore: Store<AllBarsState>,
    private eventstore: Store<EventsState>
  ) {
    this.allBars$ = allbarstore.select(AllBarsReducer.getAllBarsStates);
  }
  get carNumber() {
    return this.eventForm.get('carNumber').value;
  }
  get startDate() {
    return this.eventForm.get('startDate').value;
  }

  get checkBox() {
    return this.eventForm.get('checkBox').value;
  }

  ngOnInit() {
    this.eventForm = this.fb.group({
      carNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      checkBox: ['', [Validators.required]]
    });
  }

  generateUUID() {
    return UUID.UUID();
  }

  insertEvent(): void {
    let event: Event;
    if (!this.checkBox) {
      event = {
        id: this.generateUUID(),
        title: 'BBSSNNXX',
        start: '2018-03-20T10:00:00',
        end: '2018-03-20T11:00:00',
        className: ['red'],
        rendering: 'background'
      };
    } else {
      event = {
        id: this.generateUUID(),
        title: 'Closed hour',
        start: '2018-03-19T10:00:00',
        end: '2018-03-19T11:00:00',
        className: ['green'],
        rendering: 'background'
      };
    }

    this.eventstore.dispatch(new fromEventsActions.AddOneEvent(event));
    this.allbarstore.dispatch(new fromAllBarsActions.NoDisplayEventAction());
  }
  updateEvent(): void {
    let id = '3';
    let changes: Partial<Event> = {
      title: 'LETSCHANGE1',
      start: '2018-03-17T10:00:00',
      className: ['blue']
    };

    this.eventstore.dispatch(new fromEventsActions.UpdateOneEvent(id, changes));
    this.allbarstore.dispatch(new fromAllBarsActions.NoDisplayEventAction());
  }
  deleteEvent(): void {
    let id = '3';
    this.eventstore.dispatch(new fromEventsActions.DeleteOneEvent(id));
    this.allbarstore.dispatch(new fromAllBarsActions.NoDisplayEventAction());
  }
  cancel(): void {
    this.allbarstore.dispatch(new fromAllBarsActions.NoDisplayEventAction());
  }
}
