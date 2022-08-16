import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bubbleChart } from './bubble-chart';

describe('bubbleChart', () => {
  let component: bubbleChart;
  let fixture: ComponentFixture<bubbleChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bubbleChart ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bubbleChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

