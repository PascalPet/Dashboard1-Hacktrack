import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsWidgetComponent } from './demographics-widget.component';

describe('DemographicsWidgetComponent', () => {
  let component: DemographicsWidgetComponent;
  let fixture: ComponentFixture<DemographicsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
