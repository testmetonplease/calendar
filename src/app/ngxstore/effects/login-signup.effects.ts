import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as allLoginSignUpActions from '@actions/login-signup.actions';
import * as fromAllBarsActions from '@actions/allbars.actions';
import { LoginSignupService } from '@providers/login-signup.service';
import { User, Authenticate } from '@models/user.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class LoginSignupEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private loginSignupService: LoginSignupService
  ) {}

  @Effect()
  loginAction$ = this.actions$.pipe(
    ofType(allLoginSignUpActions.LOGIN_ACTION),
    map((action: allLoginSignUpActions.LoginAction) => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.loginSignupService
        .loginAuth(auth)
        .pipe(
          map(
            (user: User) =>
              new allLoginSignUpActions.LoginSuccesAction({ user })
          ),
          catchError(error => of(new allLoginSignUpActions.LoginFailAction()))
        )
    )
  );
}
