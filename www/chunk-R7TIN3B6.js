import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-X5HJSTN4.js";
import {
  componentOnReady
} from "./chunk-BJEHGRYO.js";
import {
  readTask,
  writeTask
} from "./chunk-EVP6H62M.js";
import {
  __async
} from "./chunk-EGSMBJJY.js";

// node_modules/@ionic/core/dist/esm/status-tap-BfJqFSLF.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(void 0, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=chunk-R7TIN3B6.js.map
