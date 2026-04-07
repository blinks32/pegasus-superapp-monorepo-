import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { map, from, of, switchMap, take } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const firestore = inject(Firestore);
  const router = inject(Router);

  // Check if user is logged in first
  if (!authService.currentUser()) {
    router.navigate(['/login']);
    return false;
  }

  // Check admin email from Firestore
  const adminConfigRef = doc(firestore, 'settings/admin');
  
  return from(getDoc(adminConfigRef)).pipe(
    map(snap => {
      const adminEmail = snap.exists() ? snap.data()['email'] : 'chndth@gmail.com';
      
      // If document doesn't exist, we fallback to the default approved email
      if (authService.currentUser()?.email === adminEmail) {
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    }),
    take(1)
  );
};
