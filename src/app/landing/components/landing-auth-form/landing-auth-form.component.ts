import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-auth-form',
  templateUrl: './landing-auth-form.component.html',
  styleUrls: ['./landing-auth-form.component.scss'],
})
export class LandingAuthFormComponent {
  authGroup = new FormGroup({
    username: new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  get usernameControl() {
    return this.authGroup.get('username');
  }

  constructor(private authService: AuthService) {}
  signin(ev: Event) {
    // Prevent trying to load page via the form
    ev.preventDefault();

    if (this.authGroup.invalid) {
      return;
    }

    this.authService.setUserName(this.usernameControl?.value || '');
  }
}
