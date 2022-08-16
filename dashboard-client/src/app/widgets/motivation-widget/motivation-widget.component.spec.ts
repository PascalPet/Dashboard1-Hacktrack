import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationWidgetComponent } from './motivation-widget.component';

describe('MotivationWidgetComponent', () => {
  let component: MotivationWidgetComponent;
  let fixture: ComponentFixture<MotivationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
