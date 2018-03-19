import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopNavComponent } from './top-nav.component';

const routes: Routes = [{ path: '',
                          component: TopNavComponent,
                          children: [
                            {
                              path: 'control',
                              loadChildren: './control-pane/control-pane.module#ControlPaneModule'
                             }
                          ]
                        }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopNavRoutingModule { }
