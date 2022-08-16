import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMeasuresWidgetFartherComponent } from './event-measures-widget-farther.component';

describe('EventMeasuresWidgetFartherComponent', () => {
  let component: EventMeasuresWidgetFartherComponent;
  let fixture: ComponentFixture<EventMeasuresWidgetFartherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMeasuresWidgetFartherComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMeasuresWidgetFartherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
