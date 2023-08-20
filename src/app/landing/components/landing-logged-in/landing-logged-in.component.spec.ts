import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLoggedInComponent } from './landing-logged-in.component';

describe('LandingLoggedInComponent', () => {
  let component: LandingLoggedInComponent;
  let fixture: ComponentFixture<LandingLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingLoggedInComponent]
    });
    fixture = TestBed.createComponent(LandingLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
