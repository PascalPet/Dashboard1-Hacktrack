import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongAnswersListComponent } from './long-answers-list.component';

describe('LongAnswersListComponent', () => {
  let component: LongAnswersListComponent;
  let fixture: ComponentFixture<LongAnswersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongAnswersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongAnswersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
