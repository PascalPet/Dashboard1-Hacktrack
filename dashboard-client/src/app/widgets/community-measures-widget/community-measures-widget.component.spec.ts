import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMeasuresWidgetComponent } from './community-measures-widget.component';

describe('CommunityMeasuresWidgetComponent', () => {
  let component: CommunityMeasuresWidgetComponent;
  let fixture: ComponentFixture<CommunityMeasuresWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityMeasuresWidgetComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMeasuresWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
