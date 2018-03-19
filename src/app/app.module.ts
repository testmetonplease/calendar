import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MessageService } from 'primeng/components/common/messageservice';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from '@reducers/reducers';
import { LoginSignupEffects } from '@effects/login-signup.effects';
import { AppEffects } from '@effects/app.effects';
import { CommonService } from '@providers/common-service';

import { TopNavModule } from './components/top-nav/top-nav.module';
import { LoginSignupModule } from './components/login-signup/login-signup.module';
import { CalendarModule } from './components/calendar/calendar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TopNavModule,
    CalendarModule,
    LoginSignupModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects, LoginSignupEffects]),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [HttpClient, MessageService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
