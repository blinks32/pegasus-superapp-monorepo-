import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (_route, _state) => {
  // No authentication required - allow direct access
  return true;
};
