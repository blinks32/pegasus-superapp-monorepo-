import {
  Auth,
  GoogleAuthProvider,
  Router,
  inject,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
  signal,
  ɵɵdefineInjectable
} from "./chunk-FKDJJIOV.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.auth = inject(Auth);
    this.router = inject(Router);
    this.currentUser = signal(null);
    this.isLoggedIn = signal(false);
    this.isLoading = signal(true);
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser.set(user);
      this.isLoggedIn.set(!!user);
      this.isLoading.set(false);
    });
  }
  /** Sign in with Google */
  signInWithGoogle() {
    return __async(this, null, function* () {
      try {
        const provider = new GoogleAuthProvider();
        yield signInWithPopup(this.auth, provider);
        this.router.navigate(["/dashboard"]);
      } catch (error) {
        console.error("Google sign-in error:", error);
        throw error;
      }
    });
  }
  /** Sign in anonymously (Guest mode) */
  signInAsGuest() {
    return __async(this, null, function* () {
      try {
        yield signInAnonymously(this.auth);
        this.router.navigate(["/dashboard"]);
      } catch (error) {
        console.error("Anonymous sign-in error:", error);
        throw error;
      }
    });
  }
  /** Sign out */
  logout() {
    return __async(this, null, function* () {
      yield signOut(this.auth);
      this.router.navigate(["/login"]);
    });
  }
  /** Get the current user ID or null */
  getUserId() {
    return this.currentUser()?.uid ?? null;
  }
  /** Get display name */
  getDisplayName() {
    const user = this.currentUser();
    if (!user)
      return "Guest";
    return user.displayName || (user.isAnonymous ? "Guest Learner" : "Student");
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-CIKUY3S6.js.map
