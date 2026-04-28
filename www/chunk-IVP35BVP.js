import {
  FirestoreDatePipe
} from "./chunk-WKUWVWXY.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent
} from "./chunk-FLFQP357.js";
import {
  IonContent
} from "./chunk-FQJMJDM6.js";
import {
  CommonModule,
  DatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RHD5Y3BY.js";
import "./chunk-KWZAHRWA.js";
import "./chunk-BARXMHI7.js";
import "./chunk-BZUELC5Z.js";
import "./chunk-NIIMY5ZY.js";
import "./chunk-LGH3V3RI.js";
import "./chunk-6NWXNUG5.js";
import "./chunk-2NCJX5FR.js";
import "./chunk-WED6EE3F.js";
import "./chunk-RLLLK2NX.js";
import "./chunk-LCF4N3YM.js";
import "./chunk-ORHTZRIY.js";
import "./chunk-FWR7NPWV.js";
import "./chunk-DVBWEDNF.js";
import {
  __async
} from "./chunk-EGSMBJJY.js";

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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 115, vars: 23, consts: [[1, "profile-hero"], [1, "pm-container"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "profile-layout"], [1, "profile-sidebar"], [1, "profile-avatar"], [1, "profile-name"], [1, "profile-email"], [1, "profile-joined"], [1, "profile-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "profile-content"], [1, "profile-section"], [1, "pm-heading-md"], [1, "profile-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "info-value", "rank-badge"], [1, "activity-summary"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-title"], [1, "activity-count"], [1, "recent-activity"], [1, "activity-time"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "ion-content")(2, "div", 0)(3, "div", 1)(4, "h1", 2);
        \u0275\u0275text(5, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "View and manage your profile information");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 1)(9, "div", 4)(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h3", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 8);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 9);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "fsDate");
        \u0275\u0275pipe(20, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12);
        \u0275\u0275text(24, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 13);
        \u0275\u0275text(26, "Assets Bought");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 11)(28, "div", 12);
        \u0275\u0275text(29, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275text(31, "Reviews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 11)(33, "div", 12);
        \u0275\u0275text(34, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 13);
        \u0275\u0275text(36, "Rank");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 14)(38, "div", 15)(39, "h2", 16);
        \u0275\u0275text(40, "Profile Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 17)(42, "div", 18)(43, "span", 19);
        \u0275\u0275text(44, "Full Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 20);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 18)(48, "span", 19);
        \u0275\u0275text(49, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 20);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 18)(53, "span", 19);
        \u0275\u0275text(54, "Member Since:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 20);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "fsDate");
        \u0275\u0275pipe(58, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 18)(60, "span", 19);
        \u0275\u0275text(61, "User Rank:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 21);
        \u0275\u0275text(63, "Beginner");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "div", 15)(65, "h2", 16);
        \u0275\u0275text(66, "Activity Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "div", 24);
        \u0275\u0275text(70, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div")(72, "div", 25);
        \u0275\u0275text(73, "Assets Purchased");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 26);
        \u0275\u0275text(75, "0 assets");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 23)(77, "div", 24);
        \u0275\u0275text(78, "\u2B50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div")(80, "div", 25);
        \u0275\u0275text(81, "Reviews Written");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 26);
        \u0275\u0275text(83, "0 reviews");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 23)(85, "div", 24);
        \u0275\u0275text(86, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div")(88, "div", 25);
        \u0275\u0275text(89, "Current Rank");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 26);
        \u0275\u0275text(91, "Beginner");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(92, "div", 15)(93, "h2", 16);
        \u0275\u0275text(94, "Recent Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 27)(96, "div", 23)(97, "div", 24);
        \u0275\u0275text(98, "\u{1F4F1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div")(100, "div", 25);
        \u0275\u0275text(101, "Joined SellJustCode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 28);
        \u0275\u0275text(103);
        \u0275\u0275pipe(104, "fsDate");
        \u0275\u0275pipe(105, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 23)(107, "div", 24);
        \u0275\u0275text(108, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div")(110, "div", 25);
        \u0275\u0275text(111, "Profile Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 28);
        \u0275\u0275text(113, "Account created successfully");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275element(114, "app-footer");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = ctx.auth.userProfile()) == null ? null : tmp_0_0.displayName == null ? null : tmp_0_0.displayName.charAt(0)) || "U", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.auth.userProfile()) == null ? null : tmp_1_0.displayName) || "User");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.userProfile()) == null ? null : tmp_2_0.email);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Member since ", \u0275\u0275pipeBind2(20, 10, \u0275\u0275pipeBind1(19, 8, (tmp_3_0 = ctx.auth.userProfile()) == null ? null : tmp_3_0.createdAt), "mediumDate"), "");
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(((tmp_4_0 = ctx.auth.userProfile()) == null ? null : tmp_4_0.displayName) || "Not set");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(((tmp_5_0 = ctx.auth.userProfile()) == null ? null : tmp_5_0.email) || "Not set");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 15, \u0275\u0275pipeBind1(57, 13, (tmp_6_0 = ctx.auth.userProfile()) == null ? null : tmp_6_0.createdAt), "longDate"));
        \u0275\u0275advance(47);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 20, \u0275\u0275pipeBind1(104, 18, (tmp_7_0 = ctx.auth.userProfile()) == null ? null : tmp_7_0.createdAt), "medium"));
      }
    }, dependencies: [CommonModule, DatePipe, IonContent, HeaderComponent, FooterComponent, FirestoreDatePipe], styles: ["\n\n.profile-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 40px 0;\n  margin-bottom: 20px;\n}\n.profile-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 2rem;\n}\n.profile-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 8px 0 0 0;\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (min-width: 769px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n    gap: 30px;\n  }\n}\n.profile-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  text-align: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n  margin: 0 auto 16px;\n}\n.profile-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n}\n.profile-email[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 8px 0;\n  font-size: 0.9rem;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.profile-joined[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.85rem;\n  margin: 0 0 24px 0;\n}\n.profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n  min-width: 80px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #667eea;\n  display: block;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  display: block;\n}\n.profile-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.profile-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.25rem;\n  color: #333;\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n  flex-wrap: wrap;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.9rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.9rem;\n  text-align: right;\n  word-break: break-word;\n}\n.rank-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.activity-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n  margin-top: 15px;\n}\n@media (min-width: 480px) {\n  .activity-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n}\n.activity-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 8px;\n  text-align: center;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n}\n.activity-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n}\n.activity-count[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #667eea;\n}\n.recent-activity[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.activity-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.activity-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .profile-hero[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .profile-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .profile-sidebar[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .profile-avatar[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 1.75rem;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .profile-email[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .profile-joined[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n  .info-label[_ngcontent-%COMP%], \n   .info-value[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-top: 5px;\n  }\n}\n@media (min-width: 769px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n    gap: 30px;\n  }\n  .profile-sidebar[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .profile-avatar[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    font-size: 2.5rem;\n  }\n  .profile-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .profile-email[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .profile-joined[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  .activity-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\pages\\profile\\profile.component.ts", lineNumber: 443 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-IVP35BVP.js.map
