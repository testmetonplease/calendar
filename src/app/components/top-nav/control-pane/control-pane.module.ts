import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPaneRoutingModule } from './control-pane-routing.module';
import { ControlPaneComponent } from './control-pane.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule, ControlPaneRoutingModule],
  declarations: [ControlPaneComponent],
  exports: [ControlPaneComponent]
})
export class ControlPaneModule {}
