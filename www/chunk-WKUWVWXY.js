import {
  ɵɵdefinePipe
} from "./chunk-RHD5Y3BY.js";

// src/app/pipes/firestore-date.pipe.ts
var FirestoreDatePipe = class _FirestoreDatePipe {
  transform(value) {
    if (!value)
      return null;
    if (value && typeof value.toDate === "function") {
      return value.toDate();
    }
    if (value instanceof Date)
      return value;
    if (typeof value === "string" || typeof value === "number") {
      return new Date(value);
    }
    if (value.seconds !== void 0) {
      return new Date(value.seconds * 1e3);
    }
    if (typeof value === "string" && value.includes("Timestamp(seconds=")) {
      const match = value.match(/seconds=(\d+)/);
      if (match && match[1]) {
        return new Date(parseInt(match[1]) * 1e3);
      }
    }
    return value;
  }
  static {
    this.\u0275fac = function FirestoreDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FirestoreDatePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "fsDate", type: _FirestoreDatePipe, pure: true, standalone: true });
  }
};

export {
  FirestoreDatePipe
};
//# sourceMappingURL=chunk-WKUWVWXY.js.map
