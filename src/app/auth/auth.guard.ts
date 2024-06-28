import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {

  const authService=inject(AuthService);
  const route=inject(Router);
  if (authService.getUserId()) {
    return true;
  }
  route.navigateByUrl("/login")
  return false;
};
