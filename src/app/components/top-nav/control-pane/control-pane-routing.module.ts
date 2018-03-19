import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPaneComponent } from './control-pane.component';

const routes: Routes = [{path: '',
                         component: ControlPaneComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPaneRoutingModule { }
