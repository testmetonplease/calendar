import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginSignUPState, AllBarsState } from '@reducers/app.states';
import * as fromAllLoginSignUpActions from '@actions/login-signup.actions';
import * as fromAllBarsActions from '@actions/allbars.actions';
import * as loginSignupReducer from '@reducers/login-signup.reducers';
import * as allBarsReducer from '@reducers/allbars.reducers';
import { Observable } from 'rxjs/Observable';
import { User } from '@models/user.model';

@Component({
  selector: 'app-control-pane',
  templateUrl: './control-pane.component.html',
  styleUrls: ['./control-pane.component.scss']
})
export class ControlPaneComponent implements OnInit {
  loginUser$: Observable<User>;
  allBars$: Observable<AllBarsState>;
  constructor(
    private store: Store<LoginSignUPState>,
    private allbarstore: Store<AllBarsState>
  ) {
    this.loginUser$ = store.select(loginSignupReducer.getloginUser);
  }

  ngOnInit() {}
  logOut(): void {
    this.store.dispatch(new fromAllLoginSignUpActions.LogoutAction());
  }
  signIn(): void {
    this.allbarstore.dispatch(new fromAllBarsActions.DisplayAction());
  }
}
