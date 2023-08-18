import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const oauthService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (oauthService.isAuthenticatedUser()) {
    return true;
  } else {
    router.navigate(["/"]);
    return false;
  }
};
