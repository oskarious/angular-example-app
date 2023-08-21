import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { LandingAuthFormComponent } from '../landing-auth-form/landing-auth-form.component';
import { LandingLoggedOutComponent } from './landing-logged-out.component';

describe('LandingLoggedOutComponent', () => {
  let component: LandingLoggedOutComponent;
  let fixture: ComponentFixture<LandingLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingLoggedOutComponent, LandingAuthFormComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(LandingLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
