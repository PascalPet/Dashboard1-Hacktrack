import { ComponentFixture, TestBed } from '@angular/core/testing';

import { polarChart } from './polar-chart';

describe('polarChart', () => {
  let component: polarChart;
  let fixture: ComponentFixture<polarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ polarChart ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(polarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
