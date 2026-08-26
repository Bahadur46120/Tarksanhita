import { HttpContext, HttpContextToken } from '@angular/common/http';

/**
 * Marks a request whose failure the caller handles itself, so the global error
 * interceptor stays quiet. Used where a missing endpoint is an expected answer
 * rather than something to put in front of the user.
 */
export const SILENT_ERRORS = new HttpContextToken<boolean>(() => false);

export function silent(): HttpContext {
  return new HttpContext().set(SILENT_ERRORS, true);
}
