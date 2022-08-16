import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProcessComponent } from './team-process.component';

describe('TeamProcessComponent', () => {
  let component: TeamProcessComponent;
  let fixture: ComponentFixture<TeamProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
