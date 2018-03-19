import { Action } from '@ngrx/store'
import { User } from '../models/user.model';

export const LOGIN_ACTION = 'LOGIN_ACTION'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const USERCHANGE = 'USER_CHANGE'

export const SIGNUP_ACTION = 'SIGNUP_ACTION'
export const SIGNUP_SUCCESS = 'SiGNUP_SUCCESS'
export const SIGNUP_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'
export const PASSWORD_RESET = 'PASSWORD_RESET'
export const LOGINFORMA = 'LOGIN_FORMA'
export const SIGNUPFORMA = 'SIGNUP_FORMA'
export const RESETPASSFORMA = 'RESET_PASS_FORMA'

export class LoginAction implements Action {
  readonly type = LOGIN_ACTION
  constructor(public payload: { email; password }) {}
}
export class LoginSuccesAction implements Action {
  readonly type = LOGIN_SUCCESS
  constructor(public payload: { user: User}) {}
}
export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL
}
export class SignUpAction implements Action {
  readonly type = SIGNUP_ACTION
  constructor(public payload: { email; username; password }) {}
}
export class SignUpSuccesAction implements Action {
  readonly type = SIGNUP_SUCCESS
}
export class SignUpFailAction implements Action {
  readonly type = SIGNUP_FAIL
}
export class ResetPasswordAction implements Action {
  readonly type = PASSWORD_RESET
  constructor(public payload: { email }) {}
}
export class LogoutAction implements Action {
  readonly type = LOGOUT
}

export class LoginFormaAction implements Action {
  readonly type = LOGINFORMA
}
export class SignUPFormaAction implements Action {
  readonly type = SIGNUPFORMA
}
export class ResetPassFormaAction implements Action {
  readonly type = RESETPASSFORMA
}

export class UserChangeAction implements Action {
  readonly type = USERCHANGE
  constructor(public payload:{user:User} ) {}
}

export type All =
  | LoginAction
  | LoginSuccesAction
  | LoginFailAction
  | SignUpAction
  | SignUpSuccesAction
  | SignUpFailAction
  | ResetPasswordAction
  | LogoutAction
  | LoginFormaAction
  | SignUPFormaAction
  | ResetPassFormaAction
  | UserChangeAction;
