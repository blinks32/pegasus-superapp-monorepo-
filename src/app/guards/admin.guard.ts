import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

export const adminGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const adminAuth = inject(AdminAuthService);

  if (adminAuth.isAdminAuthed()) return true;

  router.navigate(['/admin/login']);
  return false;
};
