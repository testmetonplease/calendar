import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Authenticate, User } from '@models/user.model';
import { CommonService } from '@providers/common-service';

@Injectable()
export class LoginSignupService {
  constructor(private commonService: CommonService) {}

  loginAuth({ email, password }: Authenticate): Observable<User> {
    let userr = {
      uid: this.commonService.makeid(),
      email: email,
      hash: password,
      name: 'revisor',
      role: 'admin',
      lastVisit: new Date()
    };
    return of(userr);
  }
}
