import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState, sendEmailVerification, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, mergeMap, retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;
  shouldApplyCustomStyle: boolean;
  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        if (!userCredential.user?.emailVerified) {
          this.sendVerificationEmail(userCredential.user);
          throw new Error('Please verify your email before logging in.');
        }
        return userCredential;
      });
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        this.sendVerificationEmail(userCredential.user);
        return userCredential;
      });
  }

  signOut() {
    return signOut(this.auth);
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
  
  sendVerificationEmail(user: User) {
    return from(sendEmailVerification(user)).pipe(
      retryWhen(errors =>
        errors.pipe(
          mergeMap((error, i) => {
            if (i >= 3) {
              return throwError(error);
            }
            console.warn(`Attempt ${i + 1}: retrying in ${Math.pow(2, i)}s`);
            return of(error).pipe(delay(Math.pow(2, i) * 1000));
          })
        )
      ),
      catchError(error => {
        console.error('Verification email error', error);
        return throwError(error);
      })
    );
  }

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  isEmailVerified(): Observable<boolean> {
    return this.user$.pipe(
      map(user => user ? user.emailVerified : false)
    );
  }
}
