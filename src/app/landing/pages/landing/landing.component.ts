import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  authed = false;
  constructor(private authService: AuthService) {
    this.authed = this.authService.isAuthed();
    this.authService.authChanges.subscribe((auth) => {
      this.authed = auth;
    });
  }
}
