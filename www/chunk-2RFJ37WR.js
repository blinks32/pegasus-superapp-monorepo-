import {
  Firestore,
  __async,
  doc,
  getDoc,
  inject,
  setDoc,
  signal,
  updateDoc,
  ɵɵdefineInjectable
} from "./chunk-HWE2I25U.js";

// src/app/services/admin-auth.service.ts
var DEFAULT_ADMIN_EMAIL = "chndth@gmail.com";
var AdminAuthService = class _AdminAuthService {
  constructor() {
    this.firestore = inject(Firestore);
    this._isAuthed = signal(false);
  }
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
  login(email, password) {
    return __async(this, null, function* () {
      const normalizedEmail = (email || "").trim().toLowerCase();
      if (!normalizedEmail || !password)
        return false;
      const settingsRef = doc(this.firestore, "settings/admin");
      const snap = yield getDoc(settingsRef);
      const data = snap.exists() ? snap.data() : null;
      const adminEmail = (data?.email ?? DEFAULT_ADMIN_EMAIL).toLowerCase();
      if (normalizedEmail !== adminEmail)
        return false;
      const passwordHash = yield this.hashPassword(password);
      if (data?.passwordHash) {
        if (data.passwordHash !== passwordHash)
          return false;
      } else {
        if (snap.exists()) {
          yield updateDoc(settingsRef, { passwordHash });
        } else {
          yield setDoc(settingsRef, { email: adminEmail, passwordHash });
        }
      }
      this._isAuthed.set(true);
      return true;
    });
  }
  hashPassword(password) {
    return __async(this, null, function* () {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      if (!globalThis.crypto?.subtle) {
        throw new Error("WebCrypto is not available in this environment.");
      }
      const hashBuffer = yield globalThis.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
    });
  }
  static {
    this.\u0275fac = function AdminAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminAuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthService, factory: _AdminAuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminAuthService
};
//# sourceMappingURL=chunk-2RFJ37WR.js.map
