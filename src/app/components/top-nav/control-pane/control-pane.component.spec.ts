import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPaneComponent } from './control-pane.component';

describe('ControlPaneComponent', () => {
  let component: ControlPaneComponent;
  let fixture: ComponentFixture<ControlPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
