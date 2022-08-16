import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAnswerListComponent } from './open-answer-list.component';

describe('OpenAnswerListComponent', () => {
  let component: OpenAnswerListComponent;
  let fixture: ComponentFixture<OpenAnswerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAnswerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
