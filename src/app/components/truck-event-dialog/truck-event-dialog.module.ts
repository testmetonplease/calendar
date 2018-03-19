import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckEventDialogRoutingModule } from './truck-event-dialog-routing.module';
import { TruckEventDialogComponent } from './truck-event-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule,
    TooltipModule,
    CalendarModule,
    DialogModule,
    CheckboxModule,
    TruckEventDialogRoutingModule
  ],
  declarations: [TruckEventDialogComponent],
  exports: [TruckEventDialogComponent]
})
export class TruckEventDialogModule {}
