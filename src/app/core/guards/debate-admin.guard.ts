import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Debate Admin Guard
 * Ensures only authorized admins can access the debate admin panel
 */
export const debateAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.user();

  // Check if user is authenticated
  if (!user) {
    console.warn('Debate Admin Guard: User not authenticated');
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Check if user has admin role
  if (!authService.hasRole('Admin')) {
    console.warn('Debate Admin Guard: User lacks required Admin role');
    router.navigate(['/forbidden']);
    return false;
  }

  return true;
};

/**
 * Debate Moderator Guard
 * For moderators who can manage some but not all resources
 */
export const debateModeratorGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.user();

  if (!user) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Allow Admin or Faculty to act as moderators
  if (!authService.hasRole('Admin', 'Faculty')) {
    router.navigate(['/forbidden']);
    return false;
  }

  return true;
};

/**
 * Debate Judge Guard
 * For judges who can only view and score debates
 */
export const debateJudgeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.user();

  if (!user) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Allow any authenticated user to view debates
  return true;
};
