import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMeasuresWidgetComponent } from './event-measures-widget.component';

describe('EventMeasuresWidgetComponent', () => {
  let component: EventMeasuresWidgetComponent;
  let fixture: ComponentFixture<EventMeasuresWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMeasuresWidgetComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMeasuresWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
