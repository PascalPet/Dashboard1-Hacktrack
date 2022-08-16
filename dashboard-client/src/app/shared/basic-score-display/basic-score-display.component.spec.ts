import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScoreDisplayComponent } from './basic-score-display.component';

describe('BasicScoreDisplayComponent', () => {
  let component: BasicScoreDisplayComponent;
  let fixture: ComponentFixture<BasicScoreDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicScoreDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
