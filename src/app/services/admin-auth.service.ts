import { Injectable, inject, signal } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';

const DEFAULT_ADMIN_EMAIL = 'chndth@gmail.com';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private firestore = inject(Firestore);

  private _isAuthed = signal(false);
  isAdminAuthed() {
    return this._isAuthed();
  }

  logout() {
    this._isAuthed.set(false);
  }

  /**
   * Admin login gate based on `settings/admin` doc:
   * - `email` (string)
   * - `passwordHash` (sha256 of the raw password)
   */
  async login(email: string, password: string): Promise<boolean> {
    const normalizedEmail = (email || '').trim().toLowerCase();
    if (!normalizedEmail || !password) return false;

    const settingsRef = doc(this.firestore, 'settings/admin');
    const snap = await getDoc(settingsRef);
    const data = snap.exists() ? (snap.data() as any) : null;

    const adminEmail = ((data?.email ?? DEFAULT_ADMIN_EMAIL) as string).toLowerCase();
    if (normalizedEmail !== adminEmail) return false;

    const passwordHash = await this.hashPassword(password);

    if (data?.passwordHash) {
      if (data.passwordHash !== passwordHash) return false;
    } else {
      // Backward compatible: if `passwordHash` doesn't exist yet, initialize it.
      if (snap.exists()) {
        await updateDoc(settingsRef, { passwordHash });
      } else {
        await setDoc(settingsRef, { email: adminEmail, passwordHash });
      }
    }

    this._isAuthed.set(true);
    return true;
  }

  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    if (!globalThis.crypto?.subtle) {
      throw new Error('WebCrypto is not available in this environment.');
    }

    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
}

