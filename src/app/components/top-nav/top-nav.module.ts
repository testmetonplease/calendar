import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavRoutingModule } from './top-nav-routing.module';
import { TopNavComponent } from './top-nav.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ControlPaneModule } from './control-pane/control-pane.module';

@NgModule({
  imports: [
    CommonModule,
    TopNavRoutingModule,
    ButtonModule,
    ControlPaneModule,
    SplitButtonModule,
    ToolbarModule
  ],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class TopNavModule {}
