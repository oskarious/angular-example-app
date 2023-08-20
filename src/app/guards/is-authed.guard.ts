import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isAuthedGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authed = authService.isAuthed();
  if (!authed) {
    router.navigate(['/']);
  }
  return authed;
};
