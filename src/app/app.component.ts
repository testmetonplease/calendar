import { Component, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AllBarsReducer from '@reducers/allbars.reducers';
import { AllBarsState } from '@reducers/app.states';
import { reducers, metaReducers } from '@reducers/reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AutoSchedule';
  allBars$: Observable<AllBarsState>;

  constructor(private store: Store<AllBarsState>) {
    this.allBars$ = store.select(AllBarsReducer.getAllBarsStates);
  }
  ngAfterViewInit() {}
}
