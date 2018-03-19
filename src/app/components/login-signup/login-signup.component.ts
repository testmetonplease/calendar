import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AllBarsState, LoginSignUPState } from '@reducers/app.states';
import * as fromAllBarsActions from '@actions/allbars.actions';
import * as fromAllLoginSignUpActions from '@actions/login-signup.actions';
import * as loginSignupReducer from '@reducers/login-signup.reducers';

import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  resetPasswordForm: FormGroup;
  loginSignState: LoginSignUPState;

  constructor(
    private fb: FormBuilder,
    private store: Store<AllBarsState>,
    private storeLogin: Store<LoginSignUPState>
  ) {
    storeLogin
      .select(loginSignupReducer.getloginSignUPStates)
      .subscribe(res => {
        this.loginSignState = res;
      });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  loginAction() {
    this.store.dispatch(new fromAllBarsActions.NoDisplayAction());
    this.store.dispatch(
      new fromAllLoginSignUpActions.LoginAction({
        email: this.email,
        password: this.password
      })
    );
  }
  gotoResetPassword() {
    this.storeLogin.dispatch(
      new fromAllLoginSignUpActions.ResetPassFormaAction()
    );
  }
  gotoSignUp() {
    this.storeLogin.dispatch(new fromAllLoginSignUpActions.SignUPFormaAction());
  }
  gotologIn() {
    this.storeLogin.dispatch(new fromAllLoginSignUpActions.LoginFormaAction());
  }

  ngOnDestroy() {}

  get email() {
    if (this.loginSignState.login) return this.loginForm.get('email').value;
    if (this.loginSignState.signUp) return this.signUpForm.get('email').value;
    if (this.loginSignState.reset)
      return this.resetPasswordForm.get('email').value;
    return '';
  }

  get username() {
    return this.signUpForm.get('username').value;
  }
  get password() {
    if (this.loginSignState.login) return this.loginForm.get('password').value;
    if (this.loginSignState.signUp)
      return this.signUpForm.get('password').value;
    return '';
  }
}
