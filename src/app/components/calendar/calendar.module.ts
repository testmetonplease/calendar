import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { ScheduleModule } from 'primeng/schedule';
import { EventService } from '@providers/event-service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    CalendarRoutingModule,
    ConfirmDialogModule
  ],
  declarations: [CalendarComponent],
  providers: [EventService, ConfirmationService],
  exports: [CalendarComponent]
})
export class CalendarModule {}
