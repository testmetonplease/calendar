import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckEventDialogComponent } from './truck-event-dialog.component';

describe('TruckEventDialogComponent', () => {
  let component: TruckEventDialogComponent;
  let fixture: ComponentFixture<TruckEventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckEventDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
