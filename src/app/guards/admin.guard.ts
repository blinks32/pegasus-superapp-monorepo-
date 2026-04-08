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
  const user = firebaseAuth.currentUser;
  if (!user) {
    router.navigate(['/admin/login']);
    return false;
  }

  // Check if user exists in Admins collection
  return from(getDoc(doc(firestore, 'Admins', user.uid))).pipe(
    map((snap) => {
      if (snap.exists()) {
        return true;
      }
      router.navigate(['/admin/login']);
      return false;
    }),
    catchError(() => {
      router.navigate(['/admin/login']);
      return of(false);
    }),
    take(1)
  );
};
