import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringWidgetComponent } from './mentoring-widget.component';

describe('MentoringWidgetComponent', () => {
  let component: MentoringWidgetComponent;
  let fixture: ComponentFixture<MentoringWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoringWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
