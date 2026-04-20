// node_modules/@ionic/core/components/p-BJoMtgfR.js
var t = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(t4) {
    this.m = new Map(Object.entries(t4));
  }
  get(t4, n3) {
    const e2 = this.m.get(t4);
    return void 0 !== e2 ? e2 : n3;
  }
  getBoolean(t4, n3 = false) {
    const e2 = this.m.get(t4);
    return void 0 === e2 ? n3 : "string" == typeof e2 ? "true" === e2 : !!e2;
  }
  getNumber(t4, n3) {
    const e2 = parseFloat(this.m.get(t4));
    return isNaN(e2) ? void 0 !== n3 ? n3 : NaN : e2;
  }
  set(t4, n3) {
    this.m.set(t4, n3);
  }
};
var n = new t();
var c;
!function(t4) {
  t4.OFF = "OFF", t4.ERROR = "ERROR", t4.WARN = "WARN";
}(c || (c = {}));
var f = (t4, ...e2) => {
  const o = n.get("logLevel", c.ERROR);
  if ([c.ERROR, c.WARN].includes(o)) return console.error(`[Ionic Error]: ${t4}`, ...e2);
};
var v = ((t4) => (t4.Undefined = "undefined", t4.Null = "null", t4.String = "string", t4.Number = "number", t4.SpecialNumber = "number", t4.Boolean = "boolean", t4.BigInt = "bigint", t4))(v || {});
var p = ((t4) => (t4.Array = "array", t4.Date = "date", t4.Map = "map", t4.Object = "object", t4.RegularExpression = "regexp", t4.Set = "set", t4.Channel = "channel", t4.Symbol = "symbol", t4))(p || {});
var j = (t4, n3) => (0, console.error)(t4, n3);
var k = "undefined" != typeof window ? window : {};
var I = k.HTMLElement || class {
};
var M = {
  i: 0,
  u: "",
  jmp: (t4) => t4(),
  raf: (t4) => requestAnimationFrame(t4),
  ael: (t4, n3, e2, o) => t4.addEventListener(n3, e2, o),
  rel: (t4, n3, e2, o) => t4.removeEventListener(n3, e2, o),
  ce: (t4, n3) => new CustomEvent(t4, n3)
};
var R = (() => {
  var t4;
  let n3 = false;
  try {
    null == (t4 = k.document) || t4.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        n3 = true;
      }
    }));
  } catch (t5) {
  }
  return n3;
})();
var A = (() => {
  try {
    return !!k.document.adoptedStyleSheets && (new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync);
  } catch (t4) {
  }
  return false;
})();
var L = !!A && (() => !!k.document && Object.getOwnPropertyDescriptor(k.document.adoptedStyleSheets, "length").writable)();
var _ = false;
var B = [];
var F = [];
var T = (t4, n3) => (e2) => {
  t4.push(e2), _ || (_ = true, n3 && 4 & M.i ? V(D) : M.raf(D));
};
var U = (t4) => {
  for (let n3 = 0; n3 < t4.length; n3++) try {
    t4[n3](performance.now());
  } catch (t5) {
    j(t5);
  }
  t4.length = 0;
};
var D = () => {
  U(B), U(F), (_ = B.length > 0) && M.raf(D);
};
var V = (t4) => Promise.resolve(void 0).then(t4);
var W = T(B, false);
var P = T(F, true);
var Qt = "Capture";
var Xt = new RegExp(Qt + "$");

// node_modules/@ionic/core/components/p-ZjP4CjeZ.js
var d = "undefined" != typeof window ? window : void 0;

// node_modules/@ionic/core/components/p-Csw8xuz4.js
var t2;
var i = (e2, o, i2) => {
  const n3 = o.startsWith("animation") ? (r3 = e2, void 0 === t2 && (t2 = void 0 === r3.style.animationName && void 0 !== r3.style.webkitAnimationName ? "-webkit-" : ""), t2) : "";
  var r3;
  e2.style.setProperty(n3 + o, i2);
};
var n2 = (e2 = [], o) => {
  if (void 0 !== o) {
    const t4 = Array.isArray(o) ? o : [o];
    return [...e2, ...t4];
  }
  return e2;
};
var r = (t4) => {
  let r3, a, s2, d3, l2, f2, c3, v2, m, u, p2, y = [], g = [], A2 = [], b = false, C = {}, E = [], h = [], R2 = {}, S = 0, j2 = false, k2 = false, w = true, T2 = false, D2 = true, F2 = false;
  const M2 = t4, W2 = [], I2 = [], K = [], P2 = [], Z = [], x2 = [], B2 = [], J = [], q = [], z = [], G = [], H = "function" == typeof AnimationEffect || void 0 !== d && "function" == typeof d.AnimationEffect, L2 = "function" == typeof Element && "function" == typeof Element.prototype.animate && H, N = () => G, O = (e2, o) => {
    const t5 = o.findIndex((o2) => o2.c === e2);
    t5 > -1 && o.splice(t5, 1);
  }, Q = (e2, o) => (((null == o ? void 0 : o.oneTimeCallback) ? I2 : W2).push({
    c: e2,
    o
  }), p2), U2 = () => {
    L2 && (G.forEach((e2) => {
      e2.cancel();
    }), G.length = 0);
  }, V2 = () => {
    x2.forEach((e2) => {
      (null == e2 ? void 0 : e2.parentNode) && e2.parentNode.removeChild(e2);
    }), x2.length = 0;
  }, X = () => void 0 !== l2 ? l2 : c3 ? c3.getFill() : "both", Y = () => void 0 !== v2 ? v2 : void 0 !== f2 ? f2 : c3 ? c3.getDirection() : "normal", $ = () => j2 ? "linear" : void 0 !== s2 ? s2 : c3 ? c3.getEasing() : "linear", _2 = () => k2 ? 0 : void 0 !== m ? m : void 0 !== a ? a : c3 ? c3.getDuration() : 0, ee = () => void 0 !== d3 ? d3 : c3 ? c3.getIterations() : 1, oe = () => void 0 !== u ? u : void 0 !== r3 ? r3 : c3 ? c3.getDelay() : 0, te = () => {
    0 !== S && (S--, 0 === S && ((() => {
      q.forEach((e3) => e3()), z.forEach((e3) => e3());
      const e2 = w ? 1 : 0, o = E, t5 = h, n3 = R2;
      P2.forEach((e3) => {
        const r4 = e3.classList;
        o.forEach((e4) => r4.add(e4)), t5.forEach((e4) => r4.remove(e4));
        for (const o2 in n3) n3.hasOwnProperty(o2) && i(e3, o2, n3[o2]);
      }), m = void 0, v2 = void 0, u = void 0, W2.forEach((o2) => o2.c(e2, p2)), I2.forEach((o2) => o2.c(e2, p2)), I2.length = 0, D2 = true, w && (T2 = true), w = true;
    })(), c3 && c3.animationFinish()));
  }, ie = () => {
    (() => {
      B2.forEach((e3) => e3()), J.forEach((e3) => e3());
      const e2 = g, o = A2, t5 = C;
      P2.forEach((n3) => {
        const r4 = n3.classList;
        e2.forEach((e3) => r4.add(e3)), o.forEach((e3) => r4.remove(e3));
        for (const e3 in t5) t5.hasOwnProperty(e3) && i(n3, e3, t5[e3]);
      });
    })(), y.length > 0 && L2 && (P2.forEach((e2) => {
      const o = e2.animate(y, {
        id: M2,
        delay: oe(),
        duration: _2(),
        easing: $(),
        iterations: ee(),
        fill: X(),
        direction: Y()
      });
      o.pause(), G.push(o);
    }), G.length > 0 && (G[0].onfinish = () => {
      te();
    })), b = true;
  }, ne = (e2) => {
    e2 = Math.min(Math.max(e2, 0), 0.9999), L2 && G.forEach((o) => {
      o.currentTime = o.effect.getComputedTiming().delay + _2() * e2, o.pause();
    });
  }, re = (e2) => {
    G.forEach((e3) => {
      e3.effect.updateTiming({
        delay: oe(),
        duration: _2(),
        easing: $(),
        iterations: ee(),
        fill: X(),
        direction: Y()
      });
    }), void 0 !== e2 && ne(e2);
  }, ae = (e2 = false, o = true, t5) => (e2 && Z.forEach((i2) => {
    i2.update(e2, o, t5);
  }), L2 && re(t5), p2), se = () => {
    b && (L2 ? G.forEach((e2) => {
      e2.pause();
    }) : P2.forEach((e2) => {
      i(e2, "animation-play-state", "paused");
    }), F2 = true);
  }, de = (e2) => new Promise((o) => {
    (null == e2 ? void 0 : e2.sync) && (k2 = true, Q(() => k2 = false, {
      oneTimeCallback: true
    })), b || ie(), T2 && (L2 && (ne(0), re()), T2 = false), D2 && (S = Z.length + 1, D2 = false);
    const t5 = () => {
      O(i2, I2), o();
    }, i2 = () => {
      O(t5, K), o();
    };
    Q(i2, {
      oneTimeCallback: true
    }), K.push({
      c: t5,
      o: {
        oneTimeCallback: true
      }
    }), Z.forEach((e3) => {
      e3.play();
    }), L2 ? (G.forEach((e3) => {
      e3.play();
    }), 0 !== y.length && 0 !== P2.length || te()) : te(), F2 = false;
  }), le = (e2, o) => {
    const t5 = y[0];
    return void 0 === t5 || void 0 !== t5.offset && 0 !== t5.offset ? y = [{
      offset: 0,
      [e2]: o
    }, ...y] : t5[e2] = o, p2;
  };
  return p2 = {
    parentAnimation: c3,
    elements: P2,
    childAnimations: Z,
    id: M2,
    animationFinish: te,
    from: le,
    to: (e2, o) => {
      const t5 = y[y.length - 1];
      return void 0 === t5 || void 0 !== t5.offset && 1 !== t5.offset ? y = [...y, {
        offset: 1,
        [e2]: o
      }] : t5[e2] = o, p2;
    },
    fromTo: (e2, o, t5) => le(e2, o).to(e2, t5),
    parent: (e2) => (c3 = e2, p2),
    play: de,
    pause: () => (Z.forEach((e2) => {
      e2.pause();
    }), se(), p2),
    stop: () => {
      Z.forEach((e2) => {
        e2.stop();
      }), b && (U2(), b = false), j2 = false, k2 = false, D2 = true, v2 = void 0, m = void 0, u = void 0, S = 0, T2 = false, w = true, F2 = false, K.forEach((e2) => e2.c(0, p2)), K.length = 0;
    },
    destroy: (e2) => (Z.forEach((o) => {
      o.destroy(e2);
    }), ((e3) => {
      U2(), e3 && V2();
    })(e2), P2.length = 0, Z.length = 0, y.length = 0, W2.length = 0, I2.length = 0, b = false, D2 = true, p2),
    keyframes: (e2) => {
      const o = y !== e2;
      return y = e2, o && ((e3) => {
        L2 && N().forEach((o2) => {
          const t5 = o2.effect;
          if (t5.setKeyframes) t5.setKeyframes(e3);
          else {
            const i2 = new KeyframeEffect(t5.target, e3, t5.getTiming());
            o2.effect = i2;
          }
        });
      })(y), p2;
    },
    addAnimation: (e2) => {
      if (null != e2) if (Array.isArray(e2)) for (const o of e2) o.parent(p2), Z.push(o);
      else e2.parent(p2), Z.push(e2);
      return p2;
    },
    addElement: (o) => {
      if (null != o) if (1 === o.nodeType) P2.push(o);
      else if (o.length >= 0) for (let e2 = 0; e2 < o.length; e2++) P2.push(o[e2]);
      else f("createAnimation - Invalid addElement value.");
      return p2;
    },
    update: ae,
    fill: (e2) => (l2 = e2, ae(true), p2),
    direction: (e2) => (f2 = e2, ae(true), p2),
    iterations: (e2) => (d3 = e2, ae(true), p2),
    duration: (e2) => (L2 || 0 !== e2 || (e2 = 1), a = e2, ae(true), p2),
    easing: (e2) => (s2 = e2, ae(true), p2),
    delay: (e2) => (r3 = e2, ae(true), p2),
    getWebAnimations: N,
    getKeyframes: () => y,
    getFill: X,
    getDirection: Y,
    getDelay: oe,
    getIterations: ee,
    getEasing: $,
    getDuration: _2,
    afterAddRead: (e2) => (q.push(e2), p2),
    afterAddWrite: (e2) => (z.push(e2), p2),
    afterClearStyles: (e2 = []) => {
      for (const o of e2) R2[o] = "";
      return p2;
    },
    afterStyles: (e2 = {}) => (R2 = e2, p2),
    afterRemoveClass: (e2) => (h = n2(h, e2), p2),
    afterAddClass: (e2) => (E = n2(E, e2), p2),
    beforeAddRead: (e2) => (B2.push(e2), p2),
    beforeAddWrite: (e2) => (J.push(e2), p2),
    beforeClearStyles: (e2 = []) => {
      for (const o of e2) C[o] = "";
      return p2;
    },
    beforeStyles: (e2 = {}) => (C = e2, p2),
    beforeRemoveClass: (e2) => (A2 = n2(A2, e2), p2),
    beforeAddClass: (e2) => (g = n2(g, e2), p2),
    onFinish: Q,
    isRunning: () => 0 !== S && !F2,
    progressStart: (e2 = false, o) => (Z.forEach((t5) => {
      t5.progressStart(e2, o);
    }), se(), j2 = e2, b || ie(), ae(false, true, o), p2),
    progressStep: (e2) => (Z.forEach((o) => {
      o.progressStep(e2);
    }), ne(e2), p2),
    progressEnd: (e2, o, t5) => (j2 = false, Z.forEach((i2) => {
      i2.progressEnd(e2, o, t5);
    }), void 0 !== t5 && (m = t5), T2 = false, w = true, 0 === e2 ? (v2 = "reverse" === Y() ? "normal" : "reverse", "reverse" === v2 && (w = false), L2 ? (ae(), ne(1 - o)) : (u = (1 - o) * _2() * -1, ae(false, false))) : 1 === e2 && (L2 ? (ae(), ne(o)) : (u = o * _2() * -1, ae(false, false))), void 0 === e2 || c3 || de(), p2)
  };
};

// node_modules/@ionic/core/components/p-DgbT0exM.js
var e = (a, i2) => {
  a.componentOnReady ? a.componentOnReady().then((a2) => i2(a2)) : d2(() => i2(a));
};
var d2 = (a) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a) : setTimeout(a);

// node_modules/@ionic/core/components/p-9VcRUwdB.js
var r2 = "ionViewWillEnter";
var t3 = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c2 = "ionViewDidLeave";
var l = "ionViewWillUnload";
var x = (n3) => {
  if (n3.classList.contains("ion-page")) return n3;
  return n3.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n3;
};

export {
  n,
  r,
  e,
  r2,
  t3 as t,
  s,
  c2 as c,
  l,
  x
};
//# sourceMappingURL=chunk-5YFJZRA5.js.map
