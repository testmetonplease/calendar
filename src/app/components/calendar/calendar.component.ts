import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromEventsActions from '@actions/events.actions';
import * as fromEvents from '@reducers/events.reducers';
import * as fromAllLoginSignUpActions from '@actions/login-signup.actions';
import * as fromAllBarsActions from '@actions/allbars.actions';
import * as loginSignupReducer from '@reducers/login-signup.reducers';
import * as allBarsReducer from '@reducers/allbars.reducers';
import {
  EventsState,
  LoginSignUPState,
  AllBarsState
} from '@reducers/app.states';
import { Event } from '@models/event.model';
import { Dictionary } from '@ngrx/entity/src/models';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CalendarComponent implements OnInit {
  businessHours: any;
  header: any;
  eventList$: Observable<Event[]>;
  eventList: any[];
  email: string = null;

  constructor(
    private confirmationService: ConfirmationService,
    private eventstore: Store<EventsState>,
    private login: Store<LoginSignUPState>,
    private allbarstore: Store<AllBarsState>
  ) {
    this.eventList$ = this.eventstore.select(fromEvents.selectAllEvents);
    // this.eventstore
    //   .select(fromEvents.selectAllEvents)
    //   .subscribe((res: Event[]) => {
    //     this.eventList = res;
    //  });
    this.login.select(loginSignupReducer.getloginUser).subscribe(res => {
      this.email = res.email;
    });
  }

  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaDay,listWeek,agendaWeek'
    };
    this.businessHours = {
      dow: [1, 2, 3, 4, 5],
      start: '10:00',
      end: '20:00'
    };
  }
  handleEventClick($event) {
    console.log('handleEventClick' + $event);
    //  this.allbarstore.dispatch(new fromAllBarsActions.DisplayEventAction());
  }
  handleDayClick($event) {
    /*  if (this.email === null) {
      this.confirmationService.confirm({
        message: 'Your permission denied . Do you want sign in?',
        accept: () => {
          console.log($event.date);
          this.allbarstore.dispatch(new fromAllBarsActions.DisplayAction());
        },
        reject: () => {}
      });
    } else {*/
    console.log($event.date);
    this.allbarstore.dispatch(new fromAllBarsActions.DisplayEventAction());
    // }
  }
  handleEventRender = $event => {
    console.log('I render1');
    console.log($event);
  };

  handleDayRender = (date, cell) => {
    console.log('I rendering day');
  };

  getDate() {
    return new Date();
  }
}
