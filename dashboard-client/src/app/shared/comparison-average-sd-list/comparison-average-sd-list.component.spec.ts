import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonAverageSdListComponent } from './comparison-average-sd-list.component';

describe('ComparisonAverageSdListComponent', () => {
  let component: ComparisonAverageSdListComponent;
  let fixture: ComponentFixture<ComparisonAverageSdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonAverageSdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonAverageSdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
