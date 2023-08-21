import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const isAuthedGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authed = (await firstValueFrom(authService.authChanges)) !== '';
  if (!authed) {
    router.navigate(['/']);
  }
  return authed;
};
