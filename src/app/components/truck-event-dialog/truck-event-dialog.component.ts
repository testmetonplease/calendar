import { Component, OnInit, Input } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Message } from 'primeng/api';

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
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-truck-event-dialog',
  templateUrl: './truck-event-dialog.component.html',
  styleUrls: ['./truck-event-dialog.component.scss']
})
export class TruckEventDialogComponent implements OnInit {
  @Input() currentStartTime: string;
  @Input() currentEndTime: string;
  eventForm: FormGroup;
  allBars$: Observable<AllBarsState>;
  eventList: any[];
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
    private allbarstore: Store<AllBarsState>,
    private eventstore: Store<EventsState>,
    private messageService: MessageService
  ) {
    this.allBars$ = allbarstore.select(AllBarsReducer.getAllBarsStates);
    this.eventstore
      .select(fromEvents.selectAllEvents)
      .subscribe((res: Event[]) => {
        this.eventList = res;
      });
  }
  get carNumber() {
    return this.eventForm.get('carNumber').value;
  }

  get checkBox() {
    return this.eventForm.get('checkBox').value;
  }

  ngOnInit() {
    this.eventForm = this.fb.group({
      carNumber: ['', [Validators.required]],
      checkBox: ['', []]
    });
  }

  generateUUID() {
    return UUID.UUID();
  }

  insertEvent(): void {
    let event: Event;
    let backcolor: string;
    let newArray = this.eventList.filter(item => {
      if (item.start === this.currentStartTime) return item;
    });
    switch (newArray.length) {
      case 4:
        console.log('not space');
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'No space more'
        });
        return;

      case 3:
        backcolor = 'red';
        newArray.forEach(item => (item.className = ['red']));
        this.eventstore.dispatch(
          new fromEventsActions.UpdateManyEvents(newArray)
        );

        break;
      default:
        backcolor = 'green';
    }

    if (!this.checkBox) {
      event = {
        id: this.generateUUID(),
        title: this.carNumber,
        start: this.currentStartTime,
        end: this.currentEndTime,
        className: [backcolor],
        rendering: ':background'
      };
    } else {
      event = {
        id: this.generateUUID(),
        title: 'Closed Hour',
        start: this.currentStartTime,
        end: this.currentEndTime,
        className: ['grey'],
        rendering: ':background'
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
      className: ['green']
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
