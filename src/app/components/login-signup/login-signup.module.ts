import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { KeyFilterModule } from 'primeng/keyfilter';
import { LoginSignupService } from '@providers/login-signup.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    MessageModule,
    TooltipModule,
    PasswordModule,
    KeyFilterModule,
    ReactiveFormsModule,
    LoginSignupRoutingModule
  ],
  declarations: [LoginSignupComponent],
  exports: [LoginSignupComponent],
  providers: [LoginSignupService],
  entryComponents: [LoginSignupComponent]
})
export class LoginSignupModule {}
