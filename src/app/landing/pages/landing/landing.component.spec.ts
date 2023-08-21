import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LandingAuthFormComponent } from '../../components/landing-auth-form/landing-auth-form.component';
import { LandingLoggedInComponent } from '../../components/landing-logged-in/landing-logged-in.component';
import { LandingLoggedOutComponent } from '../../components/landing-logged-out/landing-logged-out.component';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let authService: AuthService;
  beforeEach(() => {
    authService = new AuthService();

    TestBed.configureTestingModule({
      declarations: [LandingComponent, LandingLoggedOutComponent, LandingLoggedInComponent, LandingAuthFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{ provide: AuthService, useValue: authService }],
    });
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logged out component if not authed', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-landing-logged-out')).toBeTruthy();
    expect(compiled.querySelector('app-landing-logged-in')).toBeFalsy();
  });

  it('should render the logged in component if authed', () => {
    const compiled = fixture.nativeElement;
    component.authed = true;
    fixture.detectChanges();
    expect(compiled.querySelector('app-landing-logged-out')).toBeFalsy();
    expect(compiled.querySelector('app-landing-logged-in')).toBeTruthy();
  });

  it('should dynamically change the logged in component if authed', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-landing-logged-out')).toBeTruthy();
    expect(compiled.querySelector('app-landing-logged-in')).toBeFalsy();

    authService.authChanges.next('test');

    fixture.detectChanges();
    expect(compiled.querySelector('app-landing-logged-out')).toBeFalsy();
    expect(compiled.querySelector('app-landing-logged-in')).toBeTruthy();
  });
});
