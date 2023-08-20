import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLoggedOutComponent } from './landing-logged-out.component';

describe('LandingLoggedOutComponent', () => {
  let component: LandingLoggedOutComponent;
  let fixture: ComponentFixture<LandingLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingLoggedOutComponent]
    });
    fixture = TestBed.createComponent(LandingLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
