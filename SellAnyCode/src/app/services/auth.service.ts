import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInAnonymously,
  signInWithRedirect,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  /** Reactive current user signal */
  readonly currentUser = signal<User | null>(null);
  readonly isLoggedIn = signal(false);
  readonly isLoading = signal(true);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser.set(user);
      this.isLoggedIn.set(!!user);
      this.isLoading.set(false);
    });
  }

  /** Sign in with Google */
  async signInWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(this.auth, provider);
      // Navigation happens automatically via effect in the login component when the page reloads
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }

  /** Sign in anonymously (Guest mode) */
  async signInAsGuest(): Promise<void> {
    try {
      await signInAnonymously(this.auth);
    } catch (error) {
      console.error('Anonymous sign-in error:', error);
      throw error;
    }
  }

  /** Sign out */
  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  /** Get the current user ID or null */
  getUserId(): string | null {
    return this.currentUser()?.uid ?? null;
  }

  /** Get display name */
  getDisplayName(): string {
    const user = this.currentUser();
    if (!user) return 'Guest';
    return user.displayName || (user.isAnonymous ? 'Guest Learner' : 'Student');
  }
}
