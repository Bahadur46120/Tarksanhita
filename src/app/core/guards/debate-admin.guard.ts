import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

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

  const user = authService.currentUser();
  const roles = authService.roles();

  // Check if user is authenticated
  if (!user) {
    console.warn('Debate Admin Guard: User not authenticated');
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Check if user has admin role
  if (!roles.includes('Admin') && !roles.includes('DebateAdmin')) {
    console.warn('Debate Admin Guard: User lacks required role');
    router.navigate(['/forbidden']);
    return false;
  }

  // Additional security checks can be added here
  // - Check if user's subscription is active
  // - Verify admin panel access is enabled
  // - Log admin access for audit trail

  return true;
};

/**
 * Debate Moderator Guard
 * For moderators who can manage some but not all resources
 */
export const debateModerator Guard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.currentUser();
  const roles = authService.roles();

  if (!user) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  if (!roles.includes('Admin') && !roles.includes('DebateAdmin') && !roles.includes('Moderator')) {
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

  const user = authService.currentUser();
  const roles = authService.roles();

  if (!user) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  const hasJudgeRole = roles.includes('Judge') ||
    roles.includes('Moderator') ||
    roles.includes('Admin') ||
    roles.includes('DebateAdmin');

  if (!hasJudgeRole) {
    router.navigate(['/forbidden']);
    return false;
  }

  return true;
};
