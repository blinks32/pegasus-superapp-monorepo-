import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { from, map, take, catchError, of } from 'rxjs';
import { Auth } from '@angular/fire/auth';

export const adminGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const firestore = inject(Firestore);
  const firebaseAuth = inject(Auth);

  // Must be logged in (Firebase Auth) to access admin.
  // Use Firebase Auth's currentUser to avoid timing issues with signal updates.
  const user = firebaseAuth.currentUser;
  if (!user) {
    router.navigate(['/admin/login']);
    return false;
  }

  // Compare against configured admin email in Firestore.
  return from(getDoc(doc(firestore, 'settings/admin'))).pipe(
    map((snap) => {
      const configuredEmail = snap.exists() ? (snap.data() as any)?.['email'] : null;
      if (!configuredEmail) {
        router.navigate(['/admin/login']);
        return false;
      }

      const currentEmail = (user.email || '').toLowerCase();
      return currentEmail === String(configuredEmail).toLowerCase();
    }),
    catchError(() => {
      // Includes Firestore permission errors.
      router.navigate(['/admin/login']);
      return of(false);
    }),
    take(1)
  );
};
