import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  authState,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail as fbUpdateEmail,
  updatePassword as fbUpdatePassword
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  currentUser = signal<User | null>(null);
  userProfile = signal<UserProfile | null>(null);

  constructor() {
    authState(this.auth).subscribe(async (user) => {
      this.currentUser.set(user);
      if (user) {
        await this.syncUserProfile(user);
      } else {
        this.userProfile.set(null);
      }
    });
  }

  private async syncUserProfile(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const snap = await getDoc(userRef);
    
    if (!snap.exists()) {
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'selljustcode user',
        photoURL: user.photoURL,
        createdAt: new Date().toISOString()
      };
      await setDoc(userRef, profile);
      this.userProfile.set(profile);
    } else {
      this.userProfile.set(snap.data() as UserProfile);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/']);
    } catch (err) {
      console.error('Google Sign In Error:', err);
      throw err;
    }
  }

  async loginWithEmail(email: string, pass: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, pass);
      this.router.navigate(['/']);
    } catch (err) {
      console.error('Email Login Error:', err);
      throw err;
    }
  }

  /**
   * Sign in without navigation (used by the admin login page).
   */
  async signInWithEmailRaw(email: string, pass: string) {
    await signInWithEmailAndPassword(this.auth, email, pass);
  }

  private getCurrentUserOrThrow(): User {
    const user = this.currentUser();
    if (!user) throw new Error('Not authenticated.');
    return user;
  }

  async updateEmailWithReauth(newEmail: string, currentPassword: string) {
    const user = this.getCurrentUserOrThrow();
    const email = user.email;
    if (!email) throw new Error('Current user has no email.');

    const credential = EmailAuthProvider.credential(email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await fbUpdateEmail(user, newEmail);
  }

  async updatePasswordWithReauth(newPassword: string, currentPassword: string) {
    const user = this.getCurrentUserOrThrow();
    const email = user.email;
    if (!email) throw new Error('Current user has no email.');

    const credential = EmailAuthProvider.credential(email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await fbUpdatePassword(user, newPassword);
  }

  async registerWithEmail(email: string, pass: string, name: string) {
    try {
      const cred = await createUserWithEmailAndPassword(this.auth, email, pass);
      const userRef = doc(this.firestore, `users/${cred.user.uid}`);
      const profile: UserProfile = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: name,
        photoURL: null,
        createdAt: new Date().toISOString()
      };
      await setDoc(userRef, profile);
      this.userProfile.set(profile);
      this.router.navigate(['/']);
    } catch (err) {
      console.error('Email Registration Error:', err);
      throw err;
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
