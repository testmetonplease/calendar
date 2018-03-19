import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckEventDialogComponent } from './truck-event-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: TruckEventDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckEventDialogRoutingModule {}
