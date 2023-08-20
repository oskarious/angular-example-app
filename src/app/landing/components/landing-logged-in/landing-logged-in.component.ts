import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-logged-in',
  templateUrl: './landing-logged-in.component.html',
  styleUrls: ['./landing-logged-in.component.scss'],
})
export class LandingLoggedInComponent {
  userName: string = '';

  constructor(private authService: AuthService) {
    this.userName = this.authService.userName;
    this.authService.authChanges.subscribe((auth) => {
      this.userName = this.authService.userName;
    });
  }
}
