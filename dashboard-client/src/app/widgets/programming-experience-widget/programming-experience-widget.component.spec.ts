import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingExperienceWidgetComponent } from './programming-experience-widget.component';

describe('ProgrammingExperienceWidgetComponent', () => {
  let component: ProgrammingExperienceWidgetComponent;
  let fixture: ComponentFixture<ProgrammingExperienceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingExperienceWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingExperienceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
