import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'signup',
    loadChildren:
      './components/login-signup/login-signup.module#LoginSignupModule'
  },
  {
    path: 'truckdialog',
    loadChildren:
      './components/truck-event-dialog/truck-event-dialog.module#TruckEventDialogModule'
  },
  {
    path: 'error',
    loadChildren: './components/error-page/error-page.module#ErrorPageModule'
  },
  {
    path: 'top',
    loadChildren: './components/top-nav/top-nav.module#TopNavModule'
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
