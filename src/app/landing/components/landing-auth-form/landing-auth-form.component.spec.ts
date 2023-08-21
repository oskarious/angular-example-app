import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingAuthFormComponent } from './landing-auth-form.component';

describe('LandingAuthFormComponent', () => {
  let component: LandingAuthFormComponent;
  let fixture: ComponentFixture<LandingAuthFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingAuthFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(LandingAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
