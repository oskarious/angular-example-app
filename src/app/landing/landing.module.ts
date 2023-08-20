import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingAuthFormComponent } from './components/landing-auth-form/landing-auth-form.component';
import { LandingLoggedInComponent } from './components/landing-logged-in/landing-logged-in.component';
import { LandingLoggedOutComponent } from './components/landing-logged-out/landing-logged-out.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [LandingComponent, LandingLoggedInComponent, LandingLoggedOutComponent, LandingAuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LandingModule {}
