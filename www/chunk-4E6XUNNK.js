import {
  AuthService,
  FooterComponent,
  HeaderComponent
} from "./chunk-O7ABM3XC.js";
import {
  CommonModule,
  DatePipe,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-R4VRCTGY.js";

// src/app/pages/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.userData = null;
    this.userStats = {
      assetsBought: 0,
      reviews: 0,
      rank: "Beginner"
    };
  }
  ngOnInit() {
    this.loadUserData();
  }
  getJoinDate() {
    if (this.auth.userProfile()?.createdAt) {
      return new Date(this.auth.userProfile().createdAt);
    }
    return /* @__PURE__ */ new Date();
  }
  loadUserData() {
    return __async(this, null, function* () {
      this.userStats = {
        assetsBought: 0,
        reviews: 0,
        rank: "Beginner"
      };
    });
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 112, vars: 17, consts: [[1, "profile-container"], [1, "profile-hero"], [1, "pm-container"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "profile-layout"], [1, "profile-sidebar"], [1, "profile-avatar"], [1, "profile-name"], [1, "profile-email"], [1, "profile-joined"], [1, "profile-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "profile-content"], [1, "profile-section"], [1, "pm-heading-md"], [1, "profile-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "info-value", "rank-badge"], [1, "activity-summary"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-title"], [1, "activity-count"], [1, "recent-activity"], [1, "activity-time"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
        \u0275\u0275text(5, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "View and manage your profile information");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 5)(10, "div", 6)(11, "div", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h3", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "div", 13);
        \u0275\u0275text(23, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14);
        \u0275\u0275text(25, "Assets Bought");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 13);
        \u0275\u0275text(28, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 14);
        \u0275\u0275text(30, "Reviews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
        \u0275\u0275text(33, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 14);
        \u0275\u0275text(35, "Rank");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "h2", 17);
        \u0275\u0275text(39, "Profile Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 18)(41, "div", 19)(42, "span", 20);
        \u0275\u0275text(43, "Full Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 21);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 19)(47, "span", 20);
        \u0275\u0275text(48, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 21);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 19)(52, "span", 20);
        \u0275\u0275text(53, "Member Since:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 21);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 19)(58, "span", 20);
        \u0275\u0275text(59, "User Rank:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 22);
        \u0275\u0275text(61, "Beginner");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 16)(63, "h2", 17);
        \u0275\u0275text(64, "Activity Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 23)(66, "div", 24)(67, "div", 25);
        \u0275\u0275text(68, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div")(70, "div", 26);
        \u0275\u0275text(71, "Assets Purchased");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 27);
        \u0275\u0275text(73, "0 assets");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 24)(75, "div", 25);
        \u0275\u0275text(76, "\u2B50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div")(78, "div", 26);
        \u0275\u0275text(79, "Reviews Written");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 27);
        \u0275\u0275text(81, "0 reviews");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "div", 24)(83, "div", 25);
        \u0275\u0275text(84, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div")(86, "div", 26);
        \u0275\u0275text(87, "Current Rank");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 27);
        \u0275\u0275text(89, "Beginner");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(90, "div", 16)(91, "h2", 17);
        \u0275\u0275text(92, "Recent Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 28)(94, "div", 24)(95, "div", 25);
        \u0275\u0275text(96, "\u{1F4F1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div")(98, "div", 26);
        \u0275\u0275text(99, "Joined SellJustCode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 29);
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(103, "div", 24)(104, "div", 25);
        \u0275\u0275text(105, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div")(107, "div", 26);
        \u0275\u0275text(108, "Profile Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 29);
        \u0275\u0275text(110, "Account created successfully");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275element(111, "app-footer");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = ctx.auth.userProfile()) == null ? null : tmp_0_0.displayName == null ? null : tmp_0_0.displayName.charAt(0)) || "U", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.auth.userProfile()) == null ? null : tmp_1_0.displayName) || "User");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.userProfile()) == null ? null : tmp_2_0.email);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Member since ", \u0275\u0275pipeBind2(19, 8, ctx.getJoinDate(), "mediumDate"), "");
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(((tmp_4_0 = ctx.auth.userProfile()) == null ? null : tmp_4_0.displayName) || "Not set");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(((tmp_5_0 = ctx.auth.userProfile()) == null ? null : tmp_5_0.email) || "Not set");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 11, ctx.getJoinDate(), "longDate"));
        \u0275\u0275advance(46);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 14, ctx.getJoinDate(), "medium"));
      }
    }, dependencies: [CommonModule, DatePipe, HeaderComponent, FooterComponent], styles: ["\n\n.profile-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 40px 0;\n  margin-bottom: 20px;\n}\n.profile-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 2rem;\n}\n.profile-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 8px 0 0 0;\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (min-width: 769px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n    gap: 30px;\n  }\n}\n.profile-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  text-align: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto 16px;\n}\n.profile-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n}\n.profile-email[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 8px 0;\n  font-size: 0.9rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.profile-joined[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.85rem;\n  margin: 0 0 24px 0;\n}\n.profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n  min-width: 80px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #667eea;\n  display: block;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  display: block;\n}\n.profile-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.profile-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.25rem;\n  color: #333;\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n  flex-wrap: wrap;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.9rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.9rem;\n  text-align: right;\n  word-break: break-word;\n}\n.rank-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.activity-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n  margin-top: 15px;\n}\n@media (min-width: 480px) {\n  .activity-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n}\n.activity-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 8px;\n  text-align: center;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n}\n.activity-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n}\n.activity-count[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #667eea;\n}\n.recent-activity[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.activity-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .profile-hero[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .profile-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .profile-sidebar[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .profile-avatar[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 1.75rem;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .profile-email[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .profile-joined[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n  .info-label[_ngcontent-%COMP%], \n   .info-value[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-top: 5px;\n  }\n}\n@media (min-width: 769px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n    gap: 30px;\n  }\n  .profile-sidebar[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .profile-avatar[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    font-size: 2.5rem;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .profile-email[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .profile-joined[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  .activity-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\pages\\profile\\profile.component.ts", lineNumber: 441 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-4E6XUNNK.js.map
