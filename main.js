(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_wise_enrollment_course_wise_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-wise-enrollment/course-wise-enrollment.component */ "./src/app/course-wise-enrollment/course-wise-enrollment.component.ts");




// No redirect from '' to 'course-enrollment' - the app must not auto-load the Course-wise
// Enrollment page on initial open. It's only reached by explicitly clicking "Course
// Enrollment" under Configure in the sidebar (see app.component.html), which still routes
// here via routerLink="/course-enrollment".
var routes = [
    {
        path: 'course-enrollment',
        component: _course_wise_enrollment_course_wise_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["CourseWiseEnrollmentComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fixed-width left nav column, same at every screen size (no mobile stacking); Bootstrap has\n   no utility for an arbitrary pixel width like this. min-height keeps it (and its border-end)\n   spanning the full viewport height even when the routed page is short. */\n.app-sidebar {\n  width: 240px;\n  min-height: 100vh;\n}\n/* Mobile: the sidebar becomes a fixed overlay anchored to the left edge instead of a flex\n   item, so it no longer takes part in the .d-flex layout - the main content next to it then\n   naturally keeps its full width rather than shrinking to make room. z-index puts it above\n   both the main content and the backdrop below. */\n@media (max-width: 575.98px) {\n  .app-sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n  }\n}\n/* Dims/covers the mobile-view content behind the open sidebar; hidden entirely on desktop,\n   where the sidebar pushes the content instead of overlaying it. */\n.mobile-nav-backdrop {\n  display: none;\n}\n@media (max-width: 575.98px) {\n  .mobile-nav-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1040;\n  }\n}\n/* Mobile only: hides the list icon while the sidebar is open (its own *ngIf removes\n   .app-sidebar from the DOM when closed, so this selector stops matching and the icon\n   reappears). Desktop keeps the icon visible regardless of sidebar state. */\n@media (max-width: 575.98px) {\n  .app-sidebar ~ .app-main-content .sidebar-toggle-icon {\n    display: none;\n  }\n}\n/* White in light mode (it used to use Bootstrap's bg-light utility, the same light grey the\n   whole page's body background now uses - see styles.css - so the sidebar needs its own\n   explicit color to still stand out against that). Scoped to light mode only, matching the\n   same @media (prefers-color-scheme: light) technique used for the body background, so this\n   doesn't affect how the sidebar looks under an OS-level dark preference. */\n@media (prefers-color-scheme: light) {\n  .app-sidebar {\n    background-color: #fff;\n  }\n}\n/* Reserved, empty space for a future logo at the top of the sidebar - no logo yet, just the\n   height. Bootstrap has no utility for an arbitrary pixel height like this. */\n.app-sidebar-logo-space {\n  height: 64px;\n}\n/* Indents \"Course Enrollment\" clearly to the right of \"Configure\" (the accordion-button's own\n   padding-left is 1.25rem/20px) so it reads as visually nested under it, rather than starting\n   at - or, as .nav-link's own smaller default padding previously did, even before - Configure's\n   own left edge.\n   color: matched exactly to Configure's own expanded-state text color (measured computed value\n   rgb(5, 44, 101), i.e. --bs-accordion-active-color - the color .accordion-button:not(.collapsed)\n   uses) rather than Bootstrap's default .nav-link blue, since Course Enrollment is only ever\n   visible while nested under an expanded Configure. Also pinned for .active/:hover/:focus: plain\n   .nav-link would otherwise switch to --bs-nav-link-hover-color (blue) on hover/focus, and this\n   link's own .active class would have no color rule of its own - but Configure/.accordion-button\n   has no hover or focus color change of its own (only z-index/box-shadow), so Course Enrollment\n   stays this same single color in every state to match. */\n.nav-link-nested {\n  padding-left: 2.5rem;\n  color: var(--bs-accordion-active-color);\n}\n.nav-link-nested:hover,\n.nav-link-nested:focus {\n  color: var(--bs-accordion-active-color);\n}\n/* Course Enrollment turns the same blue as the breadcrumb's hover link color (--bs-link-color)\n   specifically when its route is active, matching Configure's own active-route color below. */\n.nav-link-nested.active {\n  color: var(--bs-link-color);\n}\n/* Configure's text turns the same blue as the breadcrumb's hover link color (--bs-link-color)\n   whenever the Course Enrollment route is active (see the routerLinkActive on .accordion-item\n   in the template) - regardless of whether Configure itself is expanded or collapsed, so this\n   intentionally overrides Bootstrap's own .accordion-button:not(.collapsed) color too. */\n.configure-route-active > .accordion-header .accordion-button {\n  color: var(--bs-link-color);\n}\n/* Sidebar toggle icon: sized up from the default ~1rem icon font-size and given a pointer\n   cursor so it clearly reads as a clickable control. display: block (an <i> is inline by\n   default, so mb-2 in the template alone wouldn't create any visible space below it) and\n   width: fit-content (so the clickable/hoverable area is just the icon itself, not the full\n   row width).\n   margin-left aligns it horizontally with whatever routed page is currently displayed below\n   it - for the Course-wise Enrollment page specifically, that means matching its own\n   .course-wise-enrollment left padding (see course-wise-enrollment.component.css): the\n   container-fluid's default 0.75rem gutter below the sm breakpoint, and that page's own 2rem\n   override from sm up. Kept as this icon's own margin (not shared padding on\n   .app-main-content) because .app-main-content wraps the routed page's own padding too -\n   adding padding here as well would double it up instead of lining the two up. */\n.sidebar-toggle-icon {\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.5rem;\n  cursor: pointer;\n  margin-left: 0.75rem;\n  /* A little breathing room from the very top of the page - it otherwise sits flush against\n     .app-main-content's own top edge, with nothing above it to create any natural spacing. */\n  margin-top: 1.5rem;\n}\n@media (min-width: 576px) {\n  .sidebar-toggle-icon {\n    margin-left: 2rem;\n  }\n}\n/* Flex items default to min-width: auto, which can stop this column from shrinking below the\n   intrinsic width of whatever the routed page renders (e.g. the enrollment page's wide table)\n   and force the whole layout to overflow horizontally instead of letting that content scroll\n   within its own column. Bootstrap's utilities don't include a min-width reset, so it's set\n   directly here - this project's compiled Bootstrap build also has no .min-w-0 utility to\n   reach for instead (see the same note on negative margins in course-wise-enrollment). */\n.app-main-content {\n  min-width: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzBFQUUwRTtBQUMxRTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTs7O2tEQUdrRDtBQUNsRDtFQUNFO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtFQUNmO0FBQ0Y7QUFFQTttRUFDbUU7QUFDbkU7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLGFBQWE7RUFDZjtBQUNGO0FBRUE7OzRFQUU0RTtBQUM1RTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7Ozs0RUFJNEU7QUFDNUU7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGO0FBRUE7OEVBQzhFO0FBQzlFO0VBQ0UsWUFBWTtBQUNkO0FBRUE7Ozs7Ozs7Ozs7OzBEQVcwRDtBQUMxRDtFQUNFLG9CQUFvQjtFQUNwQix1Q0FBdUM7QUFDekM7QUFFQTs7RUFFRSx1Q0FBdUM7QUFDekM7QUFFQTs4RkFDOEY7QUFDOUY7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTs7O3lGQUd5RjtBQUN6RjtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBOzs7Ozs7Ozs7OztpRkFXaUY7QUFDakY7RUFDRSxjQUFjO0VBQ2QsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQjs2RkFDMkY7RUFDM0Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7Ozs7O3lGQUt5RjtBQUN6RjtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRml4ZWQtd2lkdGggbGVmdCBuYXYgY29sdW1uLCBzYW1lIGF0IGV2ZXJ5IHNjcmVlbiBzaXplIChubyBtb2JpbGUgc3RhY2tpbmcpOyBCb290c3RyYXAgaGFzXG4gICBubyB1dGlsaXR5IGZvciBhbiBhcmJpdHJhcnkgcGl4ZWwgd2lkdGggbGlrZSB0aGlzLiBtaW4taGVpZ2h0IGtlZXBzIGl0IChhbmQgaXRzIGJvcmRlci1lbmQpXG4gICBzcGFubmluZyB0aGUgZnVsbCB2aWV3cG9ydCBoZWlnaHQgZXZlbiB3aGVuIHRoZSByb3V0ZWQgcGFnZSBpcyBzaG9ydC4gKi9cbi5hcHAtc2lkZWJhciB7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8qIE1vYmlsZTogdGhlIHNpZGViYXIgYmVjb21lcyBhIGZpeGVkIG92ZXJsYXkgYW5jaG9yZWQgdG8gdGhlIGxlZnQgZWRnZSBpbnN0ZWFkIG9mIGEgZmxleFxuICAgaXRlbSwgc28gaXQgbm8gbG9uZ2VyIHRha2VzIHBhcnQgaW4gdGhlIC5kLWZsZXggbGF5b3V0IC0gdGhlIG1haW4gY29udGVudCBuZXh0IHRvIGl0IHRoZW5cbiAgIG5hdHVyYWxseSBrZWVwcyBpdHMgZnVsbCB3aWR0aCByYXRoZXIgdGhhbiBzaHJpbmtpbmcgdG8gbWFrZSByb29tLiB6LWluZGV4IHB1dHMgaXQgYWJvdmVcbiAgIGJvdGggdGhlIG1haW4gY29udGVudCBhbmQgdGhlIGJhY2tkcm9wIGJlbG93LiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5hcHAtc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwNTA7XG4gIH1cbn1cblxuLyogRGltcy9jb3ZlcnMgdGhlIG1vYmlsZS12aWV3IGNvbnRlbnQgYmVoaW5kIHRoZSBvcGVuIHNpZGViYXI7IGhpZGRlbiBlbnRpcmVseSBvbiBkZXNrdG9wLFxuICAgd2hlcmUgdGhlIHNpZGViYXIgcHVzaGVzIHRoZSBjb250ZW50IGluc3RlYWQgb2Ygb3ZlcmxheWluZyBpdC4gKi9cbi5tb2JpbGUtbmF2LWJhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5tb2JpbGUtbmF2LWJhY2tkcm9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwNDA7XG4gIH1cbn1cblxuLyogTW9iaWxlIG9ubHk6IGhpZGVzIHRoZSBsaXN0IGljb24gd2hpbGUgdGhlIHNpZGViYXIgaXMgb3BlbiAoaXRzIG93biAqbmdJZiByZW1vdmVzXG4gICAuYXBwLXNpZGViYXIgZnJvbSB0aGUgRE9NIHdoZW4gY2xvc2VkLCBzbyB0aGlzIHNlbGVjdG9yIHN0b3BzIG1hdGNoaW5nIGFuZCB0aGUgaWNvblxuICAgcmVhcHBlYXJzKS4gRGVza3RvcCBrZWVwcyB0aGUgaWNvbiB2aXNpYmxlIHJlZ2FyZGxlc3Mgb2Ygc2lkZWJhciBzdGF0ZS4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuYXBwLXNpZGViYXIgfiAuYXBwLW1haW4tY29udGVudCAuc2lkZWJhci10b2dnbGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBXaGl0ZSBpbiBsaWdodCBtb2RlIChpdCB1c2VkIHRvIHVzZSBCb290c3RyYXAncyBiZy1saWdodCB1dGlsaXR5LCB0aGUgc2FtZSBsaWdodCBncmV5IHRoZVxuICAgd2hvbGUgcGFnZSdzIGJvZHkgYmFja2dyb3VuZCBub3cgdXNlcyAtIHNlZSBzdHlsZXMuY3NzIC0gc28gdGhlIHNpZGViYXIgbmVlZHMgaXRzIG93blxuICAgZXhwbGljaXQgY29sb3IgdG8gc3RpbGwgc3RhbmQgb3V0IGFnYWluc3QgdGhhdCkuIFNjb3BlZCB0byBsaWdodCBtb2RlIG9ubHksIG1hdGNoaW5nIHRoZVxuICAgc2FtZSBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkgdGVjaG5pcXVlIHVzZWQgZm9yIHRoZSBib2R5IGJhY2tncm91bmQsIHNvIHRoaXNcbiAgIGRvZXNuJ3QgYWZmZWN0IGhvdyB0aGUgc2lkZWJhciBsb29rcyB1bmRlciBhbiBPUy1sZXZlbCBkYXJrIHByZWZlcmVuY2UuICovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xuICAuYXBwLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLyogUmVzZXJ2ZWQsIGVtcHR5IHNwYWNlIGZvciBhIGZ1dHVyZSBsb2dvIGF0IHRoZSB0b3Agb2YgdGhlIHNpZGViYXIgLSBubyBsb2dvIHlldCwganVzdCB0aGVcbiAgIGhlaWdodC4gQm9vdHN0cmFwIGhhcyBubyB1dGlsaXR5IGZvciBhbiBhcmJpdHJhcnkgcGl4ZWwgaGVpZ2h0IGxpa2UgdGhpcy4gKi9cbi5hcHAtc2lkZWJhci1sb2dvLXNwYWNlIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4vKiBJbmRlbnRzIFwiQ291cnNlIEVucm9sbG1lbnRcIiBjbGVhcmx5IHRvIHRoZSByaWdodCBvZiBcIkNvbmZpZ3VyZVwiICh0aGUgYWNjb3JkaW9uLWJ1dHRvbidzIG93blxuICAgcGFkZGluZy1sZWZ0IGlzIDEuMjVyZW0vMjBweCkgc28gaXQgcmVhZHMgYXMgdmlzdWFsbHkgbmVzdGVkIHVuZGVyIGl0LCByYXRoZXIgdGhhbiBzdGFydGluZ1xuICAgYXQgLSBvciwgYXMgLm5hdi1saW5rJ3Mgb3duIHNtYWxsZXIgZGVmYXVsdCBwYWRkaW5nIHByZXZpb3VzbHkgZGlkLCBldmVuIGJlZm9yZSAtIENvbmZpZ3VyZSdzXG4gICBvd24gbGVmdCBlZGdlLlxuICAgY29sb3I6IG1hdGNoZWQgZXhhY3RseSB0byBDb25maWd1cmUncyBvd24gZXhwYW5kZWQtc3RhdGUgdGV4dCBjb2xvciAobWVhc3VyZWQgY29tcHV0ZWQgdmFsdWVcbiAgIHJnYig1LCA0NCwgMTAxKSwgaS5lLiAtLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3IgLSB0aGUgY29sb3IgLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpXG4gICB1c2VzKSByYXRoZXIgdGhhbiBCb290c3RyYXAncyBkZWZhdWx0IC5uYXYtbGluayBibHVlLCBzaW5jZSBDb3Vyc2UgRW5yb2xsbWVudCBpcyBvbmx5IGV2ZXJcbiAgIHZpc2libGUgd2hpbGUgbmVzdGVkIHVuZGVyIGFuIGV4cGFuZGVkIENvbmZpZ3VyZS4gQWxzbyBwaW5uZWQgZm9yIC5hY3RpdmUvOmhvdmVyLzpmb2N1czogcGxhaW5cbiAgIC5uYXYtbGluayB3b3VsZCBvdGhlcndpc2Ugc3dpdGNoIHRvIC0tYnMtbmF2LWxpbmstaG92ZXItY29sb3IgKGJsdWUpIG9uIGhvdmVyL2ZvY3VzLCBhbmQgdGhpc1xuICAgbGluaydzIG93biAuYWN0aXZlIGNsYXNzIHdvdWxkIGhhdmUgbm8gY29sb3IgcnVsZSBvZiBpdHMgb3duIC0gYnV0IENvbmZpZ3VyZS8uYWNjb3JkaW9uLWJ1dHRvblxuICAgaGFzIG5vIGhvdmVyIG9yIGZvY3VzIGNvbG9yIGNoYW5nZSBvZiBpdHMgb3duIChvbmx5IHotaW5kZXgvYm94LXNoYWRvdyksIHNvIENvdXJzZSBFbnJvbGxtZW50XG4gICBzdGF5cyB0aGlzIHNhbWUgc2luZ2xlIGNvbG9yIGluIGV2ZXJ5IHN0YXRlIHRvIG1hdGNoLiAqL1xuLm5hdi1saW5rLW5lc3RlZCB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBjb2xvcjogdmFyKC0tYnMtYWNjb3JkaW9uLWFjdGl2ZS1jb2xvcik7XG59XG5cbi5uYXYtbGluay1uZXN0ZWQ6aG92ZXIsXG4ubmF2LWxpbmstbmVzdGVkOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWJzLWFjY29yZGlvbi1hY3RpdmUtY29sb3IpO1xufVxuXG4vKiBDb3Vyc2UgRW5yb2xsbWVudCB0dXJucyB0aGUgc2FtZSBibHVlIGFzIHRoZSBicmVhZGNydW1iJ3MgaG92ZXIgbGluayBjb2xvciAoLS1icy1saW5rLWNvbG9yKVxuICAgc3BlY2lmaWNhbGx5IHdoZW4gaXRzIHJvdXRlIGlzIGFjdGl2ZSwgbWF0Y2hpbmcgQ29uZmlndXJlJ3Mgb3duIGFjdGl2ZS1yb3V0ZSBjb2xvciBiZWxvdy4gKi9cbi5uYXYtbGluay1uZXN0ZWQuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWJzLWxpbmstY29sb3IpO1xufVxuXG4vKiBDb25maWd1cmUncyB0ZXh0IHR1cm5zIHRoZSBzYW1lIGJsdWUgYXMgdGhlIGJyZWFkY3J1bWIncyBob3ZlciBsaW5rIGNvbG9yICgtLWJzLWxpbmstY29sb3IpXG4gICB3aGVuZXZlciB0aGUgQ291cnNlIEVucm9sbG1lbnQgcm91dGUgaXMgYWN0aXZlIChzZWUgdGhlIHJvdXRlckxpbmtBY3RpdmUgb24gLmFjY29yZGlvbi1pdGVtXG4gICBpbiB0aGUgdGVtcGxhdGUpIC0gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIENvbmZpZ3VyZSBpdHNlbGYgaXMgZXhwYW5kZWQgb3IgY29sbGFwc2VkLCBzbyB0aGlzXG4gICBpbnRlbnRpb25hbGx5IG92ZXJyaWRlcyBCb290c3RyYXAncyBvd24gLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIGNvbG9yIHRvby4gKi9cbi5jb25maWd1cmUtcm91dGUtYWN0aXZlID4gLmFjY29yZGlvbi1oZWFkZXIgLmFjY29yZGlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYnMtbGluay1jb2xvcik7XG59XG5cbi8qIFNpZGViYXIgdG9nZ2xlIGljb246IHNpemVkIHVwIGZyb20gdGhlIGRlZmF1bHQgfjFyZW0gaWNvbiBmb250LXNpemUgYW5kIGdpdmVuIGEgcG9pbnRlclxuICAgY3Vyc29yIHNvIGl0IGNsZWFybHkgcmVhZHMgYXMgYSBjbGlja2FibGUgY29udHJvbC4gZGlzcGxheTogYmxvY2sgKGFuIDxpPiBpcyBpbmxpbmUgYnlcbiAgIGRlZmF1bHQsIHNvIG1iLTIgaW4gdGhlIHRlbXBsYXRlIGFsb25lIHdvdWxkbid0IGNyZWF0ZSBhbnkgdmlzaWJsZSBzcGFjZSBiZWxvdyBpdCkgYW5kXG4gICB3aWR0aDogZml0LWNvbnRlbnQgKHNvIHRoZSBjbGlja2FibGUvaG92ZXJhYmxlIGFyZWEgaXMganVzdCB0aGUgaWNvbiBpdHNlbGYsIG5vdCB0aGUgZnVsbFxuICAgcm93IHdpZHRoKS5cbiAgIG1hcmdpbi1sZWZ0IGFsaWducyBpdCBob3Jpem9udGFsbHkgd2l0aCB3aGF0ZXZlciByb3V0ZWQgcGFnZSBpcyBjdXJyZW50bHkgZGlzcGxheWVkIGJlbG93XG4gICBpdCAtIGZvciB0aGUgQ291cnNlLXdpc2UgRW5yb2xsbWVudCBwYWdlIHNwZWNpZmljYWxseSwgdGhhdCBtZWFucyBtYXRjaGluZyBpdHMgb3duXG4gICAuY291cnNlLXdpc2UtZW5yb2xsbWVudCBsZWZ0IHBhZGRpbmcgKHNlZSBjb3Vyc2Utd2lzZS1lbnJvbGxtZW50LmNvbXBvbmVudC5jc3MpOiB0aGVcbiAgIGNvbnRhaW5lci1mbHVpZCdzIGRlZmF1bHQgMC43NXJlbSBndXR0ZXIgYmVsb3cgdGhlIHNtIGJyZWFrcG9pbnQsIGFuZCB0aGF0IHBhZ2UncyBvd24gMnJlbVxuICAgb3ZlcnJpZGUgZnJvbSBzbSB1cC4gS2VwdCBhcyB0aGlzIGljb24ncyBvd24gbWFyZ2luIChub3Qgc2hhcmVkIHBhZGRpbmcgb25cbiAgIC5hcHAtbWFpbi1jb250ZW50KSBiZWNhdXNlIC5hcHAtbWFpbi1jb250ZW50IHdyYXBzIHRoZSByb3V0ZWQgcGFnZSdzIG93biBwYWRkaW5nIHRvbyAtXG4gICBhZGRpbmcgcGFkZGluZyBoZXJlIGFzIHdlbGwgd291bGQgZG91YmxlIGl0IHVwIGluc3RlYWQgb2YgbGluaW5nIHRoZSB0d28gdXAuICovXG4uc2lkZWJhci10b2dnbGUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAvKiBBIGxpdHRsZSBicmVhdGhpbmcgcm9vbSBmcm9tIHRoZSB2ZXJ5IHRvcCBvZiB0aGUgcGFnZSAtIGl0IG90aGVyd2lzZSBzaXRzIGZsdXNoIGFnYWluc3RcbiAgICAgLmFwcC1tYWluLWNvbnRlbnQncyBvd24gdG9wIGVkZ2UsIHdpdGggbm90aGluZyBhYm92ZSBpdCB0byBjcmVhdGUgYW55IG5hdHVyYWwgc3BhY2luZy4gKi9cbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNpZGViYXItdG9nZ2xlLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB9XG59XG5cbi8qIEZsZXggaXRlbXMgZGVmYXVsdCB0byBtaW4td2lkdGg6IGF1dG8sIHdoaWNoIGNhbiBzdG9wIHRoaXMgY29sdW1uIGZyb20gc2hyaW5raW5nIGJlbG93IHRoZVxuICAgaW50cmluc2ljIHdpZHRoIG9mIHdoYXRldmVyIHRoZSByb3V0ZWQgcGFnZSByZW5kZXJzIChlLmcuIHRoZSBlbnJvbGxtZW50IHBhZ2UncyB3aWRlIHRhYmxlKVxuICAgYW5kIGZvcmNlIHRoZSB3aG9sZSBsYXlvdXQgdG8gb3ZlcmZsb3cgaG9yaXpvbnRhbGx5IGluc3RlYWQgb2YgbGV0dGluZyB0aGF0IGNvbnRlbnQgc2Nyb2xsXG4gICB3aXRoaW4gaXRzIG93biBjb2x1bW4uIEJvb3RzdHJhcCdzIHV0aWxpdGllcyBkb24ndCBpbmNsdWRlIGEgbWluLXdpZHRoIHJlc2V0LCBzbyBpdCdzIHNldFxuICAgZGlyZWN0bHkgaGVyZSAtIHRoaXMgcHJvamVjdCdzIGNvbXBpbGVkIEJvb3RzdHJhcCBidWlsZCBhbHNvIGhhcyBubyAubWluLXctMCB1dGlsaXR5IHRvXG4gICByZWFjaCBmb3IgaW5zdGVhZCAoc2VlIHRoZSBzYW1lIG5vdGUgb24gbmVnYXRpdmUgbWFyZ2lucyBpbiBjb3Vyc2Utd2lzZS1lbnJvbGxtZW50KS4gKi9cbi5hcHAtbWFpbi1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  <!-- Configure is just a Bootstrap collapse toggle; Course Enrollment is the actual\n       routerLink. Sidebar stays beside the page at every screen width, not stacked on mobile. -->\n  <!-- *ngIf so the main content reclaims full width when the sidebar is toggled off, via the\n       shared SidebarToggleService. -->\n  <!-- Mobile only (see app.component.css) - the sidebar becomes a fixed overlay there instead\n       of pushing the content, and this backdrop dims/covers that content behind it; tapping it\n       closes the sidebar, which is otherwise the only way to close it once the list icon (also\n       mobile-only) hides while the sidebar is open. No-op on desktop. -->\n  <div class=\"mobile-nav-backdrop\" *ngIf=\"sidebarToggle.visible\" (click)=\"sidebarToggle.toggle()\" aria-hidden=\"true\"></div>\n  <nav class=\"app-sidebar border-end flex-shrink-0\" aria-label=\"Main navigation\" *ngIf=\"sidebarToggle.visible\">\n    <!-- Reserved space for a future logo - intentionally empty for now. -->\n    <div class=\"app-sidebar-logo-space border-bottom\"></div>\n    <div class=\"accordion accordion-flush\" id=\"sidebarAccordion\">\n      <!-- routerLinkActive here (no routerLink of its own) scans its descendant\n           Course Enrollment link and adds \"configure-route-active\" to this element whenever\n           that link's route is active - used in app.component.css to color Configure's text\n           the same blue as the nested link, regardless of expand/collapse state. -->\n      <div class=\"accordion-item\" routerLinkActive=\"configure-route-active\">\n        <h2 class=\"accordion-header\" id=\"configureHeading\">\n          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n                  data-bs-target=\"#configureCollapse\" aria-expanded=\"false\" aria-controls=\"configureCollapse\">\n            <i class=\"ph ph-gear me-2\"></i>Configure\n          </button>\n        </h2>\n        <!-- Collapsed by default (no \"show\" class) - Configure only expands, and Course\n             Enrollment only becomes visible, once the user clicks it; it isn't auto-expanded\n             based on the current route. -->\n        <div id=\"configureCollapse\" class=\"accordion-collapse collapse\" aria-labelledby=\"configureHeading\">\n          <div class=\"accordion-body p-0\">\n            <ul class=\"nav flex-column\">\n              <li class=\"nav-item\">\n                <!-- nav-link-nested's own padding-left (see app.component.css) is deliberately\n                     greater than the accordion-button's, so this starts clearly to the right\n                     of \"Configure\" instead of at (or before) its left edge. -->\n                <a class=\"nav-link nav-link-nested\" routerLink=\"/course-enrollment\" routerLinkActive=\"active\">\n                  <span aria-hidden=\"true\">&bull;</span> Course Enrollment\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <main class=\"app-main-content flex-grow-1\">\n    <!-- Sidebar toggle - lives in this shell, not any routed page, so it's always visible. -->\n    <i class=\"ph ph-list sidebar-toggle-icon mb-2\" role=\"button\" tabindex=\"0\"\n       aria-label=\"Toggle navigation sidebar\" (click)=\"sidebarToggle.toggle()\"></i>\n\n    <!-- Routed page content, unchanged from before - only its container moved from below a\n         top navbar to beside this sidebar. -->\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-toggle.service */ "./src/app/sidebar-toggle.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sidebarToggle) {
        this.sidebarToggle = sidebarToggle;
        this.title = 'course-enrollment-demo';
        // Tracks which side of the mobile breakpoint the viewport was on last, so onWindowResize()
        // only reacts when a resize actually crosses it - not on every resize within the same size.
        this.isMobileWidth = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Sidebar defaults to visible (see SidebarToggleService) for desktop - on a mobile-sized
        // viewport it should start hidden instead, matching the Bootstrap sm breakpoint used
        // elsewhere for mobile-specific styling (see app.component.css).
        this.isMobileWidth = window.innerWidth < 576;
        if (this.isMobileWidth) {
            this.sidebarToggle.visible = false;
        }
    };
    // Keeps the sidebar's visibility correct when the viewport is resized across the mobile
    // breakpoint: always visible again on returning to desktop width, and hidden (not
    // auto-opened) on entering mobile width - matching ngOnInit()'s own initial-load rule.
    AppComponent.prototype.onWindowResize = function () {
        var nowMobileWidth = window.innerWidth < 576;
        if (nowMobileWidth === this.isMobileWidth) {
            return;
        }
        this.isMobileWidth = nowMobileWidth;
        this.sidebarToggle.visible = !nowMobileWidth;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_toggle_service__WEBPACK_IMPORTED_MODULE_2__["SidebarToggleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _course_wise_enrollment_course_wise_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-wise-enrollment/course-wise-enrollment.component */ "./src/app/course-wise-enrollment/course-wise-enrollment.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _course_wise_enrollment_course_wise_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["CourseWiseEnrollmentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-wise-enrollment/course-wise-enrollment.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/course-wise-enrollment/course-wise-enrollment.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Extra horizontal breathing room between the nav sidebar and this page's content, on top of\n   the container-fluid's own default 0.75rem gutter padding (--bs-gutter-x halved) - purely a\n   left-edge adjustment, not a general container/card-width change. Only from the sm\n   breakpoint up, matching app.component.css's own flex-sm-row: below that the sidebar stacks\n   above this content instead of beside it, so there's no sidebar-to-content horizontal gap to\n   adjust there. */\n@media (min-width: 576px) {\n  .course-wise-enrollment {\n    padding-left: 2rem;\n  }\n}\n/* A little extra breathing room between the content's right edge and the right side of the\n   available page area, on top of the container-fluid's own default 0.75rem gutter padding -\n   independent of the left-edge adjustment above, which stays untouched. Unconditional (not\n   scoped to a breakpoint) since this is about the page's own right edge, not the sidebar. */\n.course-wise-enrollment {\n  padding-right: 2rem;\n}\n/* --bs-accordion-border-color is only defined inside Bootstrap's .accordion rule; this\n   table sits outside it, so the fallback resolves to --bs-border-color, which is the\n   same value Bootstrap's own .accordion rule uses for --bs-accordion-border-color.\n   overflow: hidden makes the border-radius actually clip the table-secondary background\n   at the rounded corners, since border-collapse: collapse otherwise ignores it. */\n.course-wise-enrollment .course-list-header {\n  overflow: hidden;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  border: 1px solid var(--bs-accordion-border-color, var(--bs-border-color));\n  /* No bottom border here - the accordion's own top border sits right below this table,\n     so a bottom border too would double up as a visible seam/gap between the two. */\n  border-bottom: 0;\n}\n/* Match the accordion's own button padding (--bs-accordion-btn-padding-y: 1rem) so the\n   header row sits at the same height as the accordion items below it. */\n.course-wise-enrollment .course-list-header thead th {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n/* Lets the outer \"Core Course\"/\"Elective Course\" accordions span the card's full width and\n   sit flush with the card's top/bottom edges instead of sitting inset inside .card-body's\n   own 1rem padding on every side (--bs-card-spacer-x/-y defaults). Bootstrap ships utilities\n   for exactly this (mx-n3/my-n3), but this project's compiled Bootstrap build has negative\n   margin utilities disabled, so the equivalent is written directly here instead.\n   Core Course always bleeds to the card's left/right/top edges. Its bottom edge only bleeds\n   to the card's bottom edge when it is the last section (no Elective Course follows) - the\n   --has-elective modifier (set from the template based on electiveCourses) turns that off,\n   because otherwise Core's negative bottom margin and Elective's negative top margin below\n   would collapse into one another (adjoining negative margins collapse to a single, more\n   negative value, not stack) and completely erase the border between them, including when\n   both accordions are collapsed and there's no course content to hold the gap open.\n   Elective Course never needs a negative top margin - it never touches the card's own top\n   edge, Core Course is always first - only left/right/bottom, to bleed to the card's own\n   edges on those three sides. With both margins at 0 where the two sections meet, the\n   border below renders as a single flush line in every state, exactly like the 1px divider\n   Bootstrap already uses between stacked accordion items. */\n#coreCoursesAccordion {\n  margin: -1rem;\n}\n#coreCoursesAccordion.core-courses-accordion--has-elective {\n  margin-bottom: 0;\n}\n#electiveCoursesAccordion {\n  margin: 0 -1rem -1rem -1rem;\n  border-top: 1px solid var(--bs-accordion-border-color, var(--bs-border-color));\n}\n/* Small bottom spacing after the last individual course accordion, inside each outer\n   Core Course / Elective Course section, so it doesn't sit flush against that section's\n   own bottom edge. padding (not margin) because a plain margin here would collapse with -\n   and be cancelled by - the outer accordion's own negative margin above. */\n#courseAccordion,\n#electiveCourseAccordion {\n  padding-bottom: 0.5rem;\n}\n/* \"Core Course\"/\"Elective Course\" bold - Bootstrap's .accordion-button is normal-weight by\n   default. Scoped with direct-child combinators (not a plain descendant selector) so this\n   targets only each outer accordion's own button, not the per-course accordion-buttons\n   nested inside its body. */\n#coreCoursesAccordion > .accordion-item > .accordion-header > .accordion-button,\n#electiveCoursesAccordion > .accordion-item > .accordion-header > .accordion-button {\n  font-weight: bold;\n}\n/* Every expandable header inside Core Course/Elective Course - the outer section header and\n   each individual course header nested inside it - turns the same blue as the breadcrumb's\n   hover link color (--bs-link-color) while open (:not(.collapsed)); collapsed keeps Bootstrap's\n   normal accordion header color. Plain descendant selector (not the bold rule's direct-child\n   one above), since this is meant to reach every nested accordion-button too. */\n#coreCoursesAccordion .accordion-button:not(.collapsed),\n#electiveCoursesAccordion .accordion-button:not(.collapsed) {\n  color: var(--bs-link-color);\n}\n/* Recolors the chevron arrow to match: same SVG Bootstrap already uses for its \"open\" chevron\n   (--bs-accordion-btn-active-icon), just with the stroke swapped from Bootstrap's default\n   active color (#052c65) to --bs-link-color's own value (#0d6efd) - a CSS custom property\n   can't be interpolated into a data-URI, so the hex is inlined the same way Bootstrap's own\n   dark-mode icon override does. Only takes effect via Bootstrap's own\n   .accordion-button:not(.collapsed)::after rule, so collapsed headers are unaffected. */\n#coreCoursesAccordion .accordion-button,\n#electiveCoursesAccordion .accordion-button {\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%230d6efd' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n}\n/* This project has no app-level dark mode toggle, so without this the card header would\n   stay white regardless of the user's OS/browser color scheme. White in light mode\n   (matching Bootstrap's default), but a proper dark background with readable text when\n   the OS/browser is set to dark mode. */\n.course-wise-enrollment .card-header {\n  background-color: #fff;\n  /* A bit taller than Bootstrap's default 0.5rem top/bottom padding. */\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n/* Extra top/bottom padding for the \"Total # of students\" + Upload/Enroll header specifically,\n   on top of the 0.75rem all card-headers already get above - this is the only .card-header\n   left in this component now that each student table's own divider line lives below its\n   entries-per-page/Search row instead (see .student-table-controls below). */\n.course-wise-enrollment .enrollment-summary-header {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n/* \"# OF STUDENTS ENROLLED\" header, mobile only: wraps into three lines via natural\n   word-wrap (not forced <br> breaks) and is pinned to the column's right edge so the\n   per-course enrolled count in the accordion below (see .course-wise-enrollment\n   .accordion-button below) lines up under it exactly, instead of drifting based on\n   how wide any given digit happens to be.\n   The 41px padding-right here is measured to match where the accordion row's\n   content actually ends: the accordion-button's own 20px padding-right (Bootstrap's\n   --bs-accordion-btn-padding-x default) plus the chevron's 20px width\n   (--bs-accordion-btn-icon-width - Bootstrap lays the chevron out as a real flex\n   item via .accordion-button::after, not as decorative background, so it takes up\n   actual row width). The accordion-button's me-0 in the template removes its extra\n   reserved margin on mobile so nothing but that chevron sits between the row's\n   content and its right edge. Together these give the header cell and the\n   accordion row the same right-hand content edge, so text-align: right /\n   justify-content: end on each side land on the same pixel regardless of course\n   name length or how many digits the enrolled count has. */\n@media (max-width: 575.98px) {\n  .course-wise-enrollment .course-list-header thead th:last-child {\n    text-align: right;\n    padding-right: 41px;\n  }\n\n  /* 100px (rather than the narrower width the lowercase wording needed) because the\n     all-caps text is wider per character; still lands on exactly three lines. */\n  .course-wise-enrollment .enrolled-count-header {\n    display: inline-block;\n    max-width: 100px;\n    text-align: left;\n  }\n\n  /* Bootstrap's .table > thead sets vertical-align: bottom, which is invisible on\n     desktop/tablet (both header cells are always a single line there) but sinks the\n     single-line \"Course Name\" label to the bottom of the row on mobile, where its\n     sibling cell wraps to three lines and makes the row much taller. Centering both\n     cells here only affects mobile, where the row height actually varies. */\n  .course-wise-enrollment .course-list-header thead th {\n    vertical-align: middle;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .course-wise-enrollment .card-header {\n    background-color: #212529;\n    color: #fff;\n  }\n}\n/* Fixed to the viewport (out of normal document flow) so the alert appearing/disappearing\n   never shifts the page content below it - same top-center position on desktop and mobile.\n   white-space: nowrap keeps it on a single line on narrow mobile widths instead of wrapping. */\n.course-wise-enrollment .enrollment-success-alert {\n  position: fixed;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 1080;\n}\n/* Its single-line content is wider than a narrow mobile viewport at the normal 1rem alert\n   font-size, which forces the box to stretch edge-to-edge instead of staying compact. Smaller\n   text here keeps it the same content-sized/centered box as desktop, just narrower. */\n@media (max-width: 575.98px) {\n  .course-wise-enrollment .enrollment-success-alert {\n    font-size: 0.8rem;\n  }\n}\n/* Home/Configure read as normal breadcrumb text by default, turning into the same blue\n   Bootstrap link color only on hover - never underlined, in either state. */\n.course-wise-enrollment .breadcrumb-item a {\n  color: var(--bs-body-color);\n  text-decoration: none;\n}\n.course-wise-enrollment .breadcrumb-item a:hover {\n  color: var(--bs-link-color);\n  text-decoration: none;\n}\n/* Slightly tightens the gap to the \"Course Enrollment\" heading below, down from Bootstrap's\n   default 1rem breadcrumb margin-bottom. */\n.course-wise-enrollment .breadcrumb {\n  --bs-breadcrumb-margin-bottom: 0.5rem;\n}\n/* Student table column spacing - plain <table>, no fixed/percentage widths on the content\n   columns, so Candidate ID/USN/Department ID/Student Name keep sharing the table's own full\n   width (Bootstrap's .table is already width: 100%) the normal way a table naturally does.\n   Only the checkbox and SL# columns (which should stay compact, not stretch) get an explicit\n   width; padding-right on each column is what actually creates the visible gaps. */\n.course-wise-enrollment .student-table th.col-checkbox,\n.course-wise-enrollment .student-table td.col-checkbox {\n  width: 40px;\n  padding-right: 2rem;\n}\n.course-wise-enrollment .student-table th.col-slno,\n.course-wise-enrollment .student-table td.col-slno {\n  width: 70px;\n  padding-right: 1.5rem;\n}\n.course-wise-enrollment .student-table th.col-candidate-id,\n.course-wise-enrollment .student-table td.col-candidate-id,\n.course-wise-enrollment .student-table th.col-usn,\n.course-wise-enrollment .student-table td.col-usn,\n.course-wise-enrollment .student-table th.col-department-id,\n.course-wise-enrollment .student-table td.col-department-id {\n  padding-right: 0.75rem;\n}\n/* Keeps \"DEPARTMENT ID\" on a single line instead of wrapping inside its column. */\n.course-wise-enrollment .student-table th.col-department-id {\n  white-space: nowrap;\n}\n/* Entries-per-page selector stays compact (content-width, not full-width) on desktop/tablet -\n   Bootstrap's .form-select is width: 100% by default, which would otherwise stretch it across\n   the controls row's whole left-hand flex item. Below sm the controls row (see the template's\n   flex-column on that wrapper) stacks these full-width instead, matching the rest of this\n   page's existing mobile reflow pattern. */\n@media (min-width: 576px) {\n  .course-wise-enrollment .entries-per-page-select {\n    width: auto;\n  }\n}\n/* The global search bar is centered on the heading row itself - not merely pushed to one side\n   by flex spacing - so it stays in the middle regardless of how wide the \"Course Enrollment\"\n   heading text is. Absolute positioning (relative to the row) is what actually achieves a true\n   center, but only from xl up: below that, this page's sidebar leaves too little row width for\n   a centered 320px search box to avoid overlapping the heading (verified empirically - the\n   two start colliding below ~1200px of viewport width with this page's sidebar). Below xl the\n   search instead just flows as the row's second stacked item, full width, right below the\n   heading - the same mobile-stacks/desktop-row pattern already used elsewhere on this page,\n   just at a wider breakpoint than usual because of how much width the sidebar takes up. */\n@media (min-width: 1200px) {\n  .course-wise-enrollment .course-enrollment-heading-row {\n    position: relative;\n  }\n\n  .course-wise-enrollment .global-search-wrapper {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 380px;\n  }\n}\n.course-wise-enrollment .global-search-input {\n  width: 100%;\n}\n/* The divider line above each student table now sits directly below the entries-per-page row\n   instead of above it (there's no empty .card-header div here anymore) - the table-responsive/\n   table immediately follows with no gap of its own, so this border ends up touching the table\n   header exactly like the old empty-bar divider used to touch the row below it. */\n.course-wise-enrollment .student-table-controls {\n  border-bottom: 1px solid var(--bs-card-border-color, var(--bs-border-color));\n}\n/* Keeps \"entries per page\" on one line next to the select, even on narrow mobile widths where\n   the controls row is stacked full-width and would otherwise leave just enough space for the\n   text to word-wrap onto a second line. */\n.course-wise-enrollment .entries-per-page-label {\n  white-space: nowrap;\n}\n/* Inactive page numbers (and the Previous/Next arrows) read as plain grey/dark text with no\n   visible border or box - only the active page keeps Bootstrap's normal blue highlight\n   (--bs-pagination-active-* are deliberately left at their Bootstrap defaults below, unlike\n   every other token here). Overriding Bootstrap's own --bs-pagination-* custom properties\n   (rather than fighting .page-link's border/background with !important) is the same approach\n   already used for the accordion chevron color above. */\n.course-wise-enrollment .student-table-page-numbers {\n  --bs-pagination-border-width: 0;\n  --bs-pagination-color: var(--bs-secondary-color, #6c757d);\n  --bs-pagination-bg: transparent;\n  --bs-pagination-hover-color: var(--bs-body-color);\n  --bs-pagination-hover-bg: transparent;\n  --bs-pagination-focus-color: var(--bs-body-color);\n  --bs-pagination-focus-bg: transparent;\n  --bs-pagination-focus-box-shadow: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXdpc2UtZW5yb2xsbWVudC9jb3Vyc2Utd2lzZS1lbnJvbGxtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O2tCQUtrQjtBQUNsQjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTs7OzRGQUc0RjtBQUM1RjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOzs7O2tGQUlrRjtBQUNsRjtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDBFQUEwRTtFQUMxRTtvRkFDa0Y7RUFDbEYsZ0JBQWdCO0FBQ2xCO0FBRUE7d0VBQ3dFO0FBQ3hFO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OzREQWdCNEQ7QUFDNUQ7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhFQUE4RTtBQUNoRjtBQUVBOzs7MkVBRzJFO0FBQzNFOztFQUVFLHNCQUFzQjtBQUN4QjtBQUVBOzs7NEJBRzRCO0FBQzVCOztFQUVFLGlCQUFpQjtBQUNuQjtBQUVBOzs7O2dGQUlnRjtBQUNoRjs7RUFFRSwyQkFBMkI7QUFDN0I7QUFFQTs7Ozs7d0ZBS3dGO0FBQ3hGOztFQUVFLDhPQUE4TztBQUNoUDtBQUVBOzs7d0NBR3dDO0FBQ3hDO0VBQ0Usc0JBQXNCO0VBQ3RCLHFFQUFxRTtFQUNyRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBRUE7Ozs2RUFHNkU7QUFDN0U7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBRUE7Ozs7Ozs7Ozs7Ozs7OzsyREFlMkQ7QUFDM0Q7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7Z0ZBQzhFO0VBQzlFO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7Ozs7NEVBSTBFO0VBQzFFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUNGO0FBRUE7OytGQUUrRjtBQUMvRjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBRUE7O3NGQUVzRjtBQUN0RjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTs0RUFDNEU7QUFDNUU7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCO0FBRUE7MkNBQzJDO0FBQzNDO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBRUE7Ozs7bUZBSW1GO0FBQ25GOztFQUVFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBRUE7Ozs7OztFQU1FLHNCQUFzQjtBQUN4QjtBQUVBLGtGQUFrRjtBQUNsRjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOzs7OzJDQUkyQztBQUMzQztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQTs7Ozs7Ozs7MEZBUTBGO0FBQzFGO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7OztrRkFHa0Y7QUFDbEY7RUFDRSw0RUFBNEU7QUFDOUU7QUFFQTs7MENBRTBDO0FBQzFDO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7O3dEQUt3RDtBQUN4RDtFQUNFLCtCQUErQjtFQUMvQix5REFBeUQ7RUFDekQsK0JBQStCO0VBQy9CLGlEQUFpRDtFQUNqRCxxQ0FBcUM7RUFDckMsaURBQWlEO0VBQ2pELHFDQUFxQztFQUNyQyxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2Utd2lzZS1lbnJvbGxtZW50L2NvdXJzZS13aXNlLWVucm9sbG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dHJhIGhvcml6b250YWwgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiB0aGUgbmF2IHNpZGViYXIgYW5kIHRoaXMgcGFnZSdzIGNvbnRlbnQsIG9uIHRvcCBvZlxuICAgdGhlIGNvbnRhaW5lci1mbHVpZCdzIG93biBkZWZhdWx0IDAuNzVyZW0gZ3V0dGVyIHBhZGRpbmcgKC0tYnMtZ3V0dGVyLXggaGFsdmVkKSAtIHB1cmVseSBhXG4gICBsZWZ0LWVkZ2UgYWRqdXN0bWVudCwgbm90IGEgZ2VuZXJhbCBjb250YWluZXIvY2FyZC13aWR0aCBjaGFuZ2UuIE9ubHkgZnJvbSB0aGUgc21cbiAgIGJyZWFrcG9pbnQgdXAsIG1hdGNoaW5nIGFwcC5jb21wb25lbnQuY3NzJ3Mgb3duIGZsZXgtc20tcm93OiBiZWxvdyB0aGF0IHRoZSBzaWRlYmFyIHN0YWNrc1xuICAgYWJvdmUgdGhpcyBjb250ZW50IGluc3RlYWQgb2YgYmVzaWRlIGl0LCBzbyB0aGVyZSdzIG5vIHNpZGViYXItdG8tY29udGVudCBob3Jpem9udGFsIGdhcCB0b1xuICAgYWRqdXN0IHRoZXJlLiAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIH1cbn1cblxuLyogQSBsaXR0bGUgZXh0cmEgYnJlYXRoaW5nIHJvb20gYmV0d2VlbiB0aGUgY29udGVudCdzIHJpZ2h0IGVkZ2UgYW5kIHRoZSByaWdodCBzaWRlIG9mIHRoZVxuICAgYXZhaWxhYmxlIHBhZ2UgYXJlYSwgb24gdG9wIG9mIHRoZSBjb250YWluZXItZmx1aWQncyBvd24gZGVmYXVsdCAwLjc1cmVtIGd1dHRlciBwYWRkaW5nIC1cbiAgIGluZGVwZW5kZW50IG9mIHRoZSBsZWZ0LWVkZ2UgYWRqdXN0bWVudCBhYm92ZSwgd2hpY2ggc3RheXMgdW50b3VjaGVkLiBVbmNvbmRpdGlvbmFsIChub3RcbiAgIHNjb3BlZCB0byBhIGJyZWFrcG9pbnQpIHNpbmNlIHRoaXMgaXMgYWJvdXQgdGhlIHBhZ2UncyBvd24gcmlnaHQgZWRnZSwgbm90IHRoZSBzaWRlYmFyLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4vKiAtLWJzLWFjY29yZGlvbi1ib3JkZXItY29sb3IgaXMgb25seSBkZWZpbmVkIGluc2lkZSBCb290c3RyYXAncyAuYWNjb3JkaW9uIHJ1bGU7IHRoaXNcbiAgIHRhYmxlIHNpdHMgb3V0c2lkZSBpdCwgc28gdGhlIGZhbGxiYWNrIHJlc29sdmVzIHRvIC0tYnMtYm9yZGVyLWNvbG9yLCB3aGljaCBpcyB0aGVcbiAgIHNhbWUgdmFsdWUgQm9vdHN0cmFwJ3Mgb3duIC5hY2NvcmRpb24gcnVsZSB1c2VzIGZvciAtLWJzLWFjY29yZGlvbi1ib3JkZXItY29sb3IuXG4gICBvdmVyZmxvdzogaGlkZGVuIG1ha2VzIHRoZSBib3JkZXItcmFkaXVzIGFjdHVhbGx5IGNsaXAgdGhlIHRhYmxlLXNlY29uZGFyeSBiYWNrZ3JvdW5kXG4gICBhdCB0aGUgcm91bmRlZCBjb3JuZXJzLCBzaW5jZSBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlIG90aGVyd2lzZSBpZ25vcmVzIGl0LiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmNvdXJzZS1saXN0LWhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWFjY29yZGlvbi1ib3JkZXItY29sb3IsIHZhcigtLWJzLWJvcmRlci1jb2xvcikpO1xuICAvKiBObyBib3R0b20gYm9yZGVyIGhlcmUgLSB0aGUgYWNjb3JkaW9uJ3Mgb3duIHRvcCBib3JkZXIgc2l0cyByaWdodCBiZWxvdyB0aGlzIHRhYmxlLFxuICAgICBzbyBhIGJvdHRvbSBib3JkZXIgdG9vIHdvdWxkIGRvdWJsZSB1cCBhcyBhIHZpc2libGUgc2VhbS9nYXAgYmV0d2VlbiB0aGUgdHdvLiAqL1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4vKiBNYXRjaCB0aGUgYWNjb3JkaW9uJ3Mgb3duIGJ1dHRvbiBwYWRkaW5nICgtLWJzLWFjY29yZGlvbi1idG4tcGFkZGluZy15OiAxcmVtKSBzbyB0aGVcbiAgIGhlYWRlciByb3cgc2l0cyBhdCB0aGUgc2FtZSBoZWlnaHQgYXMgdGhlIGFjY29yZGlvbiBpdGVtcyBiZWxvdyBpdC4gKi9cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5jb3Vyc2UtbGlzdC1oZWFkZXIgdGhlYWQgdGgge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi8qIExldHMgdGhlIG91dGVyIFwiQ29yZSBDb3Vyc2VcIi9cIkVsZWN0aXZlIENvdXJzZVwiIGFjY29yZGlvbnMgc3BhbiB0aGUgY2FyZCdzIGZ1bGwgd2lkdGggYW5kXG4gICBzaXQgZmx1c2ggd2l0aCB0aGUgY2FyZCdzIHRvcC9ib3R0b20gZWRnZXMgaW5zdGVhZCBvZiBzaXR0aW5nIGluc2V0IGluc2lkZSAuY2FyZC1ib2R5J3NcbiAgIG93biAxcmVtIHBhZGRpbmcgb24gZXZlcnkgc2lkZSAoLS1icy1jYXJkLXNwYWNlci14Ly15IGRlZmF1bHRzKS4gQm9vdHN0cmFwIHNoaXBzIHV0aWxpdGllc1xuICAgZm9yIGV4YWN0bHkgdGhpcyAobXgtbjMvbXktbjMpLCBidXQgdGhpcyBwcm9qZWN0J3MgY29tcGlsZWQgQm9vdHN0cmFwIGJ1aWxkIGhhcyBuZWdhdGl2ZVxuICAgbWFyZ2luIHV0aWxpdGllcyBkaXNhYmxlZCwgc28gdGhlIGVxdWl2YWxlbnQgaXMgd3JpdHRlbiBkaXJlY3RseSBoZXJlIGluc3RlYWQuXG4gICBDb3JlIENvdXJzZSBhbHdheXMgYmxlZWRzIHRvIHRoZSBjYXJkJ3MgbGVmdC9yaWdodC90b3AgZWRnZXMuIEl0cyBib3R0b20gZWRnZSBvbmx5IGJsZWVkc1xuICAgdG8gdGhlIGNhcmQncyBib3R0b20gZWRnZSB3aGVuIGl0IGlzIHRoZSBsYXN0IHNlY3Rpb24gKG5vIEVsZWN0aXZlIENvdXJzZSBmb2xsb3dzKSAtIHRoZVxuICAgLS1oYXMtZWxlY3RpdmUgbW9kaWZpZXIgKHNldCBmcm9tIHRoZSB0ZW1wbGF0ZSBiYXNlZCBvbiBlbGVjdGl2ZUNvdXJzZXMpIHR1cm5zIHRoYXQgb2ZmLFxuICAgYmVjYXVzZSBvdGhlcndpc2UgQ29yZSdzIG5lZ2F0aXZlIGJvdHRvbSBtYXJnaW4gYW5kIEVsZWN0aXZlJ3MgbmVnYXRpdmUgdG9wIG1hcmdpbiBiZWxvd1xuICAgd291bGQgY29sbGFwc2UgaW50byBvbmUgYW5vdGhlciAoYWRqb2luaW5nIG5lZ2F0aXZlIG1hcmdpbnMgY29sbGFwc2UgdG8gYSBzaW5nbGUsIG1vcmVcbiAgIG5lZ2F0aXZlIHZhbHVlLCBub3Qgc3RhY2spIGFuZCBjb21wbGV0ZWx5IGVyYXNlIHRoZSBib3JkZXIgYmV0d2VlbiB0aGVtLCBpbmNsdWRpbmcgd2hlblxuICAgYm90aCBhY2NvcmRpb25zIGFyZSBjb2xsYXBzZWQgYW5kIHRoZXJlJ3Mgbm8gY291cnNlIGNvbnRlbnQgdG8gaG9sZCB0aGUgZ2FwIG9wZW4uXG4gICBFbGVjdGl2ZSBDb3Vyc2UgbmV2ZXIgbmVlZHMgYSBuZWdhdGl2ZSB0b3AgbWFyZ2luIC0gaXQgbmV2ZXIgdG91Y2hlcyB0aGUgY2FyZCdzIG93biB0b3BcbiAgIGVkZ2UsIENvcmUgQ291cnNlIGlzIGFsd2F5cyBmaXJzdCAtIG9ubHkgbGVmdC9yaWdodC9ib3R0b20sIHRvIGJsZWVkIHRvIHRoZSBjYXJkJ3Mgb3duXG4gICBlZGdlcyBvbiB0aG9zZSB0aHJlZSBzaWRlcy4gV2l0aCBib3RoIG1hcmdpbnMgYXQgMCB3aGVyZSB0aGUgdHdvIHNlY3Rpb25zIG1lZXQsIHRoZVxuICAgYm9yZGVyIGJlbG93IHJlbmRlcnMgYXMgYSBzaW5nbGUgZmx1c2ggbGluZSBpbiBldmVyeSBzdGF0ZSwgZXhhY3RseSBsaWtlIHRoZSAxcHggZGl2aWRlclxuICAgQm9vdHN0cmFwIGFscmVhZHkgdXNlcyBiZXR3ZWVuIHN0YWNrZWQgYWNjb3JkaW9uIGl0ZW1zLiAqL1xuI2NvcmVDb3Vyc2VzQWNjb3JkaW9uIHtcbiAgbWFyZ2luOiAtMXJlbTtcbn1cblxuI2NvcmVDb3Vyc2VzQWNjb3JkaW9uLmNvcmUtY291cnNlcy1hY2NvcmRpb24tLWhhcy1lbGVjdGl2ZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbiNlbGVjdGl2ZUNvdXJzZXNBY2NvcmRpb24ge1xuICBtYXJnaW46IDAgLTFyZW0gLTFyZW0gLTFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1icy1hY2NvcmRpb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1icy1ib3JkZXItY29sb3IpKTtcbn1cblxuLyogU21hbGwgYm90dG9tIHNwYWNpbmcgYWZ0ZXIgdGhlIGxhc3QgaW5kaXZpZHVhbCBjb3Vyc2UgYWNjb3JkaW9uLCBpbnNpZGUgZWFjaCBvdXRlclxuICAgQ29yZSBDb3Vyc2UgLyBFbGVjdGl2ZSBDb3Vyc2Ugc2VjdGlvbiwgc28gaXQgZG9lc24ndCBzaXQgZmx1c2ggYWdhaW5zdCB0aGF0IHNlY3Rpb24nc1xuICAgb3duIGJvdHRvbSBlZGdlLiBwYWRkaW5nIChub3QgbWFyZ2luKSBiZWNhdXNlIGEgcGxhaW4gbWFyZ2luIGhlcmUgd291bGQgY29sbGFwc2Ugd2l0aCAtXG4gICBhbmQgYmUgY2FuY2VsbGVkIGJ5IC0gdGhlIG91dGVyIGFjY29yZGlvbidzIG93biBuZWdhdGl2ZSBtYXJnaW4gYWJvdmUuICovXG4jY291cnNlQWNjb3JkaW9uLFxuI2VsZWN0aXZlQ291cnNlQWNjb3JkaW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLyogXCJDb3JlIENvdXJzZVwiL1wiRWxlY3RpdmUgQ291cnNlXCIgYm9sZCAtIEJvb3RzdHJhcCdzIC5hY2NvcmRpb24tYnV0dG9uIGlzIG5vcm1hbC13ZWlnaHQgYnlcbiAgIGRlZmF1bHQuIFNjb3BlZCB3aXRoIGRpcmVjdC1jaGlsZCBjb21iaW5hdG9ycyAobm90IGEgcGxhaW4gZGVzY2VuZGFudCBzZWxlY3Rvcikgc28gdGhpc1xuICAgdGFyZ2V0cyBvbmx5IGVhY2ggb3V0ZXIgYWNjb3JkaW9uJ3Mgb3duIGJ1dHRvbiwgbm90IHRoZSBwZXItY291cnNlIGFjY29yZGlvbi1idXR0b25zXG4gICBuZXN0ZWQgaW5zaWRlIGl0cyBib2R5LiAqL1xuI2NvcmVDb3Vyc2VzQWNjb3JkaW9uID4gLmFjY29yZGlvbi1pdGVtID4gLmFjY29yZGlvbi1oZWFkZXIgPiAuYWNjb3JkaW9uLWJ1dHRvbixcbiNlbGVjdGl2ZUNvdXJzZXNBY2NvcmRpb24gPiAuYWNjb3JkaW9uLWl0ZW0gPiAuYWNjb3JkaW9uLWhlYWRlciA+IC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIEV2ZXJ5IGV4cGFuZGFibGUgaGVhZGVyIGluc2lkZSBDb3JlIENvdXJzZS9FbGVjdGl2ZSBDb3Vyc2UgLSB0aGUgb3V0ZXIgc2VjdGlvbiBoZWFkZXIgYW5kXG4gICBlYWNoIGluZGl2aWR1YWwgY291cnNlIGhlYWRlciBuZXN0ZWQgaW5zaWRlIGl0IC0gdHVybnMgdGhlIHNhbWUgYmx1ZSBhcyB0aGUgYnJlYWRjcnVtYidzXG4gICBob3ZlciBsaW5rIGNvbG9yICgtLWJzLWxpbmstY29sb3IpIHdoaWxlIG9wZW4gKDpub3QoLmNvbGxhcHNlZCkpOyBjb2xsYXBzZWQga2VlcHMgQm9vdHN0cmFwJ3NcbiAgIG5vcm1hbCBhY2NvcmRpb24gaGVhZGVyIGNvbG9yLiBQbGFpbiBkZXNjZW5kYW50IHNlbGVjdG9yIChub3QgdGhlIGJvbGQgcnVsZSdzIGRpcmVjdC1jaGlsZFxuICAgb25lIGFib3ZlKSwgc2luY2UgdGhpcyBpcyBtZWFudCB0byByZWFjaCBldmVyeSBuZXN0ZWQgYWNjb3JkaW9uLWJ1dHRvbiB0b28uICovXG4jY29yZUNvdXJzZXNBY2NvcmRpb24gLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpLFxuI2VsZWN0aXZlQ291cnNlc0FjY29yZGlvbiAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xuICBjb2xvcjogdmFyKC0tYnMtbGluay1jb2xvcik7XG59XG5cbi8qIFJlY29sb3JzIHRoZSBjaGV2cm9uIGFycm93IHRvIG1hdGNoOiBzYW1lIFNWRyBCb290c3RyYXAgYWxyZWFkeSB1c2VzIGZvciBpdHMgXCJvcGVuXCIgY2hldnJvblxuICAgKC0tYnMtYWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbiksIGp1c3Qgd2l0aCB0aGUgc3Ryb2tlIHN3YXBwZWQgZnJvbSBCb290c3RyYXAncyBkZWZhdWx0XG4gICBhY3RpdmUgY29sb3IgKCMwNTJjNjUpIHRvIC0tYnMtbGluay1jb2xvcidzIG93biB2YWx1ZSAoIzBkNmVmZCkgLSBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgIGNhbid0IGJlIGludGVycG9sYXRlZCBpbnRvIGEgZGF0YS1VUkksIHNvIHRoZSBoZXggaXMgaW5saW5lZCB0aGUgc2FtZSB3YXkgQm9vdHN0cmFwJ3Mgb3duXG4gICBkYXJrLW1vZGUgaWNvbiBvdmVycmlkZSBkb2VzLiBPbmx5IHRha2VzIGVmZmVjdCB2aWEgQm9vdHN0cmFwJ3Mgb3duXG4gICAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVyIHJ1bGUsIHNvIGNvbGxhcHNlZCBoZWFkZXJzIGFyZSB1bmFmZmVjdGVkLiAqL1xuI2NvcmVDb3Vyc2VzQWNjb3JkaW9uIC5hY2NvcmRpb24tYnV0dG9uLFxuI2VsZWN0aXZlQ291cnNlc0FjY29yZGlvbiAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gIC0tYnMtYWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbjogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMwZDZlZmQnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM2UlM2NwYXRoIGQ9J20yIDUgNiA2IDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLyogVGhpcyBwcm9qZWN0IGhhcyBubyBhcHAtbGV2ZWwgZGFyayBtb2RlIHRvZ2dsZSwgc28gd2l0aG91dCB0aGlzIHRoZSBjYXJkIGhlYWRlciB3b3VsZFxuICAgc3RheSB3aGl0ZSByZWdhcmRsZXNzIG9mIHRoZSB1c2VyJ3MgT1MvYnJvd3NlciBjb2xvciBzY2hlbWUuIFdoaXRlIGluIGxpZ2h0IG1vZGVcbiAgIChtYXRjaGluZyBCb290c3RyYXAncyBkZWZhdWx0KSwgYnV0IGEgcHJvcGVyIGRhcmsgYmFja2dyb3VuZCB3aXRoIHJlYWRhYmxlIHRleHQgd2hlblxuICAgdGhlIE9TL2Jyb3dzZXIgaXMgc2V0IHRvIGRhcmsgbW9kZS4gKi9cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8qIEEgYml0IHRhbGxlciB0aGFuIEJvb3RzdHJhcCdzIGRlZmF1bHQgMC41cmVtIHRvcC9ib3R0b20gcGFkZGluZy4gKi9cbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuXG4vKiBFeHRyYSB0b3AvYm90dG9tIHBhZGRpbmcgZm9yIHRoZSBcIlRvdGFsICMgb2Ygc3R1ZGVudHNcIiArIFVwbG9hZC9FbnJvbGwgaGVhZGVyIHNwZWNpZmljYWxseSxcbiAgIG9uIHRvcCBvZiB0aGUgMC43NXJlbSBhbGwgY2FyZC1oZWFkZXJzIGFscmVhZHkgZ2V0IGFib3ZlIC0gdGhpcyBpcyB0aGUgb25seSAuY2FyZC1oZWFkZXJcbiAgIGxlZnQgaW4gdGhpcyBjb21wb25lbnQgbm93IHRoYXQgZWFjaCBzdHVkZW50IHRhYmxlJ3Mgb3duIGRpdmlkZXIgbGluZSBsaXZlcyBiZWxvdyBpdHNcbiAgIGVudHJpZXMtcGVyLXBhZ2UvU2VhcmNoIHJvdyBpbnN0ZWFkIChzZWUgLnN0dWRlbnQtdGFibGUtY29udHJvbHMgYmVsb3cpLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmVucm9sbG1lbnQtc3VtbWFyeS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG5cbi8qIFwiIyBPRiBTVFVERU5UUyBFTlJPTExFRFwiIGhlYWRlciwgbW9iaWxlIG9ubHk6IHdyYXBzIGludG8gdGhyZWUgbGluZXMgdmlhIG5hdHVyYWxcbiAgIHdvcmQtd3JhcCAobm90IGZvcmNlZCA8YnI+IGJyZWFrcykgYW5kIGlzIHBpbm5lZCB0byB0aGUgY29sdW1uJ3MgcmlnaHQgZWRnZSBzbyB0aGVcbiAgIHBlci1jb3Vyc2UgZW5yb2xsZWQgY291bnQgaW4gdGhlIGFjY29yZGlvbiBiZWxvdyAoc2VlIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50XG4gICAuYWNjb3JkaW9uLWJ1dHRvbiBiZWxvdykgbGluZXMgdXAgdW5kZXIgaXQgZXhhY3RseSwgaW5zdGVhZCBvZiBkcmlmdGluZyBiYXNlZCBvblxuICAgaG93IHdpZGUgYW55IGdpdmVuIGRpZ2l0IGhhcHBlbnMgdG8gYmUuXG4gICBUaGUgNDFweCBwYWRkaW5nLXJpZ2h0IGhlcmUgaXMgbWVhc3VyZWQgdG8gbWF0Y2ggd2hlcmUgdGhlIGFjY29yZGlvbiByb3cnc1xuICAgY29udGVudCBhY3R1YWxseSBlbmRzOiB0aGUgYWNjb3JkaW9uLWJ1dHRvbidzIG93biAyMHB4IHBhZGRpbmctcmlnaHQgKEJvb3RzdHJhcCdzXG4gICAtLWJzLWFjY29yZGlvbi1idG4tcGFkZGluZy14IGRlZmF1bHQpIHBsdXMgdGhlIGNoZXZyb24ncyAyMHB4IHdpZHRoXG4gICAoLS1icy1hY2NvcmRpb24tYnRuLWljb24td2lkdGggLSBCb290c3RyYXAgbGF5cyB0aGUgY2hldnJvbiBvdXQgYXMgYSByZWFsIGZsZXhcbiAgIGl0ZW0gdmlhIC5hY2NvcmRpb24tYnV0dG9uOjphZnRlciwgbm90IGFzIGRlY29yYXRpdmUgYmFja2dyb3VuZCwgc28gaXQgdGFrZXMgdXBcbiAgIGFjdHVhbCByb3cgd2lkdGgpLiBUaGUgYWNjb3JkaW9uLWJ1dHRvbidzIG1lLTAgaW4gdGhlIHRlbXBsYXRlIHJlbW92ZXMgaXRzIGV4dHJhXG4gICByZXNlcnZlZCBtYXJnaW4gb24gbW9iaWxlIHNvIG5vdGhpbmcgYnV0IHRoYXQgY2hldnJvbiBzaXRzIGJldHdlZW4gdGhlIHJvdydzXG4gICBjb250ZW50IGFuZCBpdHMgcmlnaHQgZWRnZS4gVG9nZXRoZXIgdGhlc2UgZ2l2ZSB0aGUgaGVhZGVyIGNlbGwgYW5kIHRoZVxuICAgYWNjb3JkaW9uIHJvdyB0aGUgc2FtZSByaWdodC1oYW5kIGNvbnRlbnQgZWRnZSwgc28gdGV4dC1hbGlnbjogcmlnaHQgL1xuICAganVzdGlmeS1jb250ZW50OiBlbmQgb24gZWFjaCBzaWRlIGxhbmQgb24gdGhlIHNhbWUgcGl4ZWwgcmVnYXJkbGVzcyBvZiBjb3Vyc2VcbiAgIG5hbWUgbGVuZ3RoIG9yIGhvdyBtYW55IGRpZ2l0cyB0aGUgZW5yb2xsZWQgY291bnQgaGFzLiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5jb3Vyc2UtbGlzdC1oZWFkZXIgdGhlYWQgdGg6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNDFweDtcbiAgfVxuXG4gIC8qIDEwMHB4IChyYXRoZXIgdGhhbiB0aGUgbmFycm93ZXIgd2lkdGggdGhlIGxvd2VyY2FzZSB3b3JkaW5nIG5lZWRlZCkgYmVjYXVzZSB0aGVcbiAgICAgYWxsLWNhcHMgdGV4dCBpcyB3aWRlciBwZXIgY2hhcmFjdGVyOyBzdGlsbCBsYW5kcyBvbiBleGFjdGx5IHRocmVlIGxpbmVzLiAqL1xuICAuY291cnNlLXdpc2UtZW5yb2xsbWVudCAuZW5yb2xsZWQtY291bnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLyogQm9vdHN0cmFwJ3MgLnRhYmxlID4gdGhlYWQgc2V0cyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tLCB3aGljaCBpcyBpbnZpc2libGUgb25cbiAgICAgZGVza3RvcC90YWJsZXQgKGJvdGggaGVhZGVyIGNlbGxzIGFyZSBhbHdheXMgYSBzaW5nbGUgbGluZSB0aGVyZSkgYnV0IHNpbmtzIHRoZVxuICAgICBzaW5nbGUtbGluZSBcIkNvdXJzZSBOYW1lXCIgbGFiZWwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcm93IG9uIG1vYmlsZSwgd2hlcmUgaXRzXG4gICAgIHNpYmxpbmcgY2VsbCB3cmFwcyB0byB0aHJlZSBsaW5lcyBhbmQgbWFrZXMgdGhlIHJvdyBtdWNoIHRhbGxlci4gQ2VudGVyaW5nIGJvdGhcbiAgICAgY2VsbHMgaGVyZSBvbmx5IGFmZmVjdHMgbW9iaWxlLCB3aGVyZSB0aGUgcm93IGhlaWdodCBhY3R1YWxseSB2YXJpZXMuICovXG4gIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5jb3Vyc2UtbGlzdC1oZWFkZXIgdGhlYWQgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAuY291cnNlLXdpc2UtZW5yb2xsbWVudCAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLyogRml4ZWQgdG8gdGhlIHZpZXdwb3J0IChvdXQgb2Ygbm9ybWFsIGRvY3VtZW50IGZsb3cpIHNvIHRoZSBhbGVydCBhcHBlYXJpbmcvZGlzYXBwZWFyaW5nXG4gICBuZXZlciBzaGlmdHMgdGhlIHBhZ2UgY29udGVudCBiZWxvdyBpdCAtIHNhbWUgdG9wLWNlbnRlciBwb3NpdGlvbiBvbiBkZXNrdG9wIGFuZCBtb2JpbGUuXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwIGtlZXBzIGl0IG9uIGEgc2luZ2xlIGxpbmUgb24gbmFycm93IG1vYmlsZSB3aWR0aHMgaW5zdGVhZCBvZiB3cmFwcGluZy4gKi9cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5lbnJvbGxtZW50LXN1Y2Nlc3MtYWxlcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHotaW5kZXg6IDEwODA7XG59XG5cbi8qIEl0cyBzaW5nbGUtbGluZSBjb250ZW50IGlzIHdpZGVyIHRoYW4gYSBuYXJyb3cgbW9iaWxlIHZpZXdwb3J0IGF0IHRoZSBub3JtYWwgMXJlbSBhbGVydFxuICAgZm9udC1zaXplLCB3aGljaCBmb3JjZXMgdGhlIGJveCB0byBzdHJldGNoIGVkZ2UtdG8tZWRnZSBpbnN0ZWFkIG9mIHN0YXlpbmcgY29tcGFjdC4gU21hbGxlclxuICAgdGV4dCBoZXJlIGtlZXBzIGl0IHRoZSBzYW1lIGNvbnRlbnQtc2l6ZWQvY2VudGVyZWQgYm94IGFzIGRlc2t0b3AsIGp1c3QgbmFycm93ZXIuICovXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmVucm9sbG1lbnQtc3VjY2Vzcy1hbGVydCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cblxuLyogSG9tZS9Db25maWd1cmUgcmVhZCBhcyBub3JtYWwgYnJlYWRjcnVtYiB0ZXh0IGJ5IGRlZmF1bHQsIHR1cm5pbmcgaW50byB0aGUgc2FtZSBibHVlXG4gICBCb290c3RyYXAgbGluayBjb2xvciBvbmx5IG9uIGhvdmVyIC0gbmV2ZXIgdW5kZXJsaW5lZCwgaW4gZWl0aGVyIHN0YXRlLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmJyZWFkY3J1bWItaXRlbSBhIHtcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5icmVhZGNydW1iLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1icy1saW5rLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBTbGlnaHRseSB0aWdodGVucyB0aGUgZ2FwIHRvIHRoZSBcIkNvdXJzZSBFbnJvbGxtZW50XCIgaGVhZGluZyBiZWxvdywgZG93biBmcm9tIEJvb3RzdHJhcCdzXG4gICBkZWZhdWx0IDFyZW0gYnJlYWRjcnVtYiBtYXJnaW4tYm90dG9tLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmJyZWFkY3J1bWIge1xuICAtLWJzLWJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4vKiBTdHVkZW50IHRhYmxlIGNvbHVtbiBzcGFjaW5nIC0gcGxhaW4gPHRhYmxlPiwgbm8gZml4ZWQvcGVyY2VudGFnZSB3aWR0aHMgb24gdGhlIGNvbnRlbnRcbiAgIGNvbHVtbnMsIHNvIENhbmRpZGF0ZSBJRC9VU04vRGVwYXJ0bWVudCBJRC9TdHVkZW50IE5hbWUga2VlcCBzaGFyaW5nIHRoZSB0YWJsZSdzIG93biBmdWxsXG4gICB3aWR0aCAoQm9vdHN0cmFwJ3MgLnRhYmxlIGlzIGFscmVhZHkgd2lkdGg6IDEwMCUpIHRoZSBub3JtYWwgd2F5IGEgdGFibGUgbmF0dXJhbGx5IGRvZXMuXG4gICBPbmx5IHRoZSBjaGVja2JveCBhbmQgU0wjIGNvbHVtbnMgKHdoaWNoIHNob3VsZCBzdGF5IGNvbXBhY3QsIG5vdCBzdHJldGNoKSBnZXQgYW4gZXhwbGljaXRcbiAgIHdpZHRoOyBwYWRkaW5nLXJpZ2h0IG9uIGVhY2ggY29sdW1uIGlzIHdoYXQgYWN0dWFsbHkgY3JlYXRlcyB0aGUgdmlzaWJsZSBnYXBzLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUgdGguY29sLWNoZWNrYm94LFxuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUgdGQuY29sLWNoZWNrYm94IHtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5zdHVkZW50LXRhYmxlIHRoLmNvbC1zbG5vLFxuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUgdGQuY29sLXNsbm8ge1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG4uY291cnNlLXdpc2UtZW5yb2xsbWVudCAuc3R1ZGVudC10YWJsZSB0aC5jb2wtY2FuZGlkYXRlLWlkLFxuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUgdGQuY29sLWNhbmRpZGF0ZS1pZCxcbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5zdHVkZW50LXRhYmxlIHRoLmNvbC11c24sXG4uY291cnNlLXdpc2UtZW5yb2xsbWVudCAuc3R1ZGVudC10YWJsZSB0ZC5jb2wtdXNuLFxuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUgdGguY29sLWRlcGFydG1lbnQtaWQsXG4uY291cnNlLXdpc2UtZW5yb2xsbWVudCAuc3R1ZGVudC10YWJsZSB0ZC5jb2wtZGVwYXJ0bWVudC1pZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG5cbi8qIEtlZXBzIFwiREVQQVJUTUVOVCBJRFwiIG9uIGEgc2luZ2xlIGxpbmUgaW5zdGVhZCBvZiB3cmFwcGluZyBpbnNpZGUgaXRzIGNvbHVtbi4gKi9cbi5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5zdHVkZW50LXRhYmxlIHRoLmNvbC1kZXBhcnRtZW50LWlkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogRW50cmllcy1wZXItcGFnZSBzZWxlY3RvciBzdGF5cyBjb21wYWN0IChjb250ZW50LXdpZHRoLCBub3QgZnVsbC13aWR0aCkgb24gZGVza3RvcC90YWJsZXQgLVxuICAgQm9vdHN0cmFwJ3MgLmZvcm0tc2VsZWN0IGlzIHdpZHRoOiAxMDAlIGJ5IGRlZmF1bHQsIHdoaWNoIHdvdWxkIG90aGVyd2lzZSBzdHJldGNoIGl0IGFjcm9zc1xuICAgdGhlIGNvbnRyb2xzIHJvdydzIHdob2xlIGxlZnQtaGFuZCBmbGV4IGl0ZW0uIEJlbG93IHNtIHRoZSBjb250cm9scyByb3cgKHNlZSB0aGUgdGVtcGxhdGUnc1xuICAgZmxleC1jb2x1bW4gb24gdGhhdCB3cmFwcGVyKSBzdGFja3MgdGhlc2UgZnVsbC13aWR0aCBpbnN0ZWFkLCBtYXRjaGluZyB0aGUgcmVzdCBvZiB0aGlzXG4gICBwYWdlJ3MgZXhpc3RpbmcgbW9iaWxlIHJlZmxvdyBwYXR0ZXJuLiAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5lbnRyaWVzLXBlci1wYWdlLXNlbGVjdCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLyogVGhlIGdsb2JhbCBzZWFyY2ggYmFyIGlzIGNlbnRlcmVkIG9uIHRoZSBoZWFkaW5nIHJvdyBpdHNlbGYgLSBub3QgbWVyZWx5IHB1c2hlZCB0byBvbmUgc2lkZVxuICAgYnkgZmxleCBzcGFjaW5nIC0gc28gaXQgc3RheXMgaW4gdGhlIG1pZGRsZSByZWdhcmRsZXNzIG9mIGhvdyB3aWRlIHRoZSBcIkNvdXJzZSBFbnJvbGxtZW50XCJcbiAgIGhlYWRpbmcgdGV4dCBpcy4gQWJzb2x1dGUgcG9zaXRpb25pbmcgKHJlbGF0aXZlIHRvIHRoZSByb3cpIGlzIHdoYXQgYWN0dWFsbHkgYWNoaWV2ZXMgYSB0cnVlXG4gICBjZW50ZXIsIGJ1dCBvbmx5IGZyb20geGwgdXA6IGJlbG93IHRoYXQsIHRoaXMgcGFnZSdzIHNpZGViYXIgbGVhdmVzIHRvbyBsaXR0bGUgcm93IHdpZHRoIGZvclxuICAgYSBjZW50ZXJlZCAzMjBweCBzZWFyY2ggYm94IHRvIGF2b2lkIG92ZXJsYXBwaW5nIHRoZSBoZWFkaW5nICh2ZXJpZmllZCBlbXBpcmljYWxseSAtIHRoZVxuICAgdHdvIHN0YXJ0IGNvbGxpZGluZyBiZWxvdyB+MTIwMHB4IG9mIHZpZXdwb3J0IHdpZHRoIHdpdGggdGhpcyBwYWdlJ3Mgc2lkZWJhcikuIEJlbG93IHhsIHRoZVxuICAgc2VhcmNoIGluc3RlYWQganVzdCBmbG93cyBhcyB0aGUgcm93J3Mgc2Vjb25kIHN0YWNrZWQgaXRlbSwgZnVsbCB3aWR0aCwgcmlnaHQgYmVsb3cgdGhlXG4gICBoZWFkaW5nIC0gdGhlIHNhbWUgbW9iaWxlLXN0YWNrcy9kZXNrdG9wLXJvdyBwYXR0ZXJuIGFscmVhZHkgdXNlZCBlbHNld2hlcmUgb24gdGhpcyBwYWdlLFxuICAganVzdCBhdCBhIHdpZGVyIGJyZWFrcG9pbnQgdGhhbiB1c3VhbCBiZWNhdXNlIG9mIGhvdyBtdWNoIHdpZHRoIHRoZSBzaWRlYmFyIHRha2VzIHVwLiAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY291cnNlLXdpc2UtZW5yb2xsbWVudCAuY291cnNlLWVucm9sbG1lbnQtaGVhZGluZy1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jb3Vyc2Utd2lzZS1lbnJvbGxtZW50IC5nbG9iYWwtc2VhcmNoLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzODBweDtcbiAgfVxufVxuXG4uY291cnNlLXdpc2UtZW5yb2xsbWVudCAuZ2xvYmFsLXNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBUaGUgZGl2aWRlciBsaW5lIGFib3ZlIGVhY2ggc3R1ZGVudCB0YWJsZSBub3cgc2l0cyBkaXJlY3RseSBiZWxvdyB0aGUgZW50cmllcy1wZXItcGFnZSByb3dcbiAgIGluc3RlYWQgb2YgYWJvdmUgaXQgKHRoZXJlJ3Mgbm8gZW1wdHkgLmNhcmQtaGVhZGVyIGRpdiBoZXJlIGFueW1vcmUpIC0gdGhlIHRhYmxlLXJlc3BvbnNpdmUvXG4gICB0YWJsZSBpbW1lZGlhdGVseSBmb2xsb3dzIHdpdGggbm8gZ2FwIG9mIGl0cyBvd24sIHNvIHRoaXMgYm9yZGVyIGVuZHMgdXAgdG91Y2hpbmcgdGhlIHRhYmxlXG4gICBoZWFkZXIgZXhhY3RseSBsaWtlIHRoZSBvbGQgZW1wdHktYmFyIGRpdmlkZXIgdXNlZCB0byB0b3VjaCB0aGUgcm93IGJlbG93IGl0LiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUtY29udHJvbHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnMtY2FyZC1ib3JkZXItY29sb3IsIHZhcigtLWJzLWJvcmRlci1jb2xvcikpO1xufVxuXG4vKiBLZWVwcyBcImVudHJpZXMgcGVyIHBhZ2VcIiBvbiBvbmUgbGluZSBuZXh0IHRvIHRoZSBzZWxlY3QsIGV2ZW4gb24gbmFycm93IG1vYmlsZSB3aWR0aHMgd2hlcmVcbiAgIHRoZSBjb250cm9scyByb3cgaXMgc3RhY2tlZCBmdWxsLXdpZHRoIGFuZCB3b3VsZCBvdGhlcndpc2UgbGVhdmUganVzdCBlbm91Z2ggc3BhY2UgZm9yIHRoZVxuICAgdGV4dCB0byB3b3JkLXdyYXAgb250byBhIHNlY29uZCBsaW5lLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLmVudHJpZXMtcGVyLXBhZ2UtbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBJbmFjdGl2ZSBwYWdlIG51bWJlcnMgKGFuZCB0aGUgUHJldmlvdXMvTmV4dCBhcnJvd3MpIHJlYWQgYXMgcGxhaW4gZ3JleS9kYXJrIHRleHQgd2l0aCBub1xuICAgdmlzaWJsZSBib3JkZXIgb3IgYm94IC0gb25seSB0aGUgYWN0aXZlIHBhZ2Uga2VlcHMgQm9vdHN0cmFwJ3Mgbm9ybWFsIGJsdWUgaGlnaGxpZ2h0XG4gICAoLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS0qIGFyZSBkZWxpYmVyYXRlbHkgbGVmdCBhdCB0aGVpciBCb290c3RyYXAgZGVmYXVsdHMgYmVsb3csIHVubGlrZVxuICAgZXZlcnkgb3RoZXIgdG9rZW4gaGVyZSkuIE92ZXJyaWRpbmcgQm9vdHN0cmFwJ3Mgb3duIC0tYnMtcGFnaW5hdGlvbi0qIGN1c3RvbSBwcm9wZXJ0aWVzXG4gICAocmF0aGVyIHRoYW4gZmlnaHRpbmcgLnBhZ2UtbGluaydzIGJvcmRlci9iYWNrZ3JvdW5kIHdpdGggIWltcG9ydGFudCkgaXMgdGhlIHNhbWUgYXBwcm9hY2hcbiAgIGFscmVhZHkgdXNlZCBmb3IgdGhlIGFjY29yZGlvbiBjaGV2cm9uIGNvbG9yIGFib3ZlLiAqL1xuLmNvdXJzZS13aXNlLWVucm9sbG1lbnQgLnN0dWRlbnQtdGFibGUtcGFnZS1udW1iZXJzIHtcbiAgLS1icy1wYWdpbmF0aW9uLWJvcmRlci13aWR0aDogMDtcbiAgLS1icy1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IsICM2Yzc1N2QpO1xuICAtLWJzLXBhZ2luYXRpb24tYmc6IHRyYW5zcGFyZW50O1xuICAtLWJzLXBhZ2luYXRpb24taG92ZXItY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAtLWJzLXBhZ2luYXRpb24taG92ZXItYmc6IHRyYW5zcGFyZW50O1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtYmc6IHRyYW5zcGFyZW50O1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/course-wise-enrollment/course-wise-enrollment.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/course-wise-enrollment/course-wise-enrollment.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- container-fluid (not container): avoids Bootstrap's max-width + auto-centering, which\n     pushed content away from the sidebar and grew worse once the sidebar was hidden. -->\n<div class=\"container-fluid my-4 course-wise-enrollment\">\n  <!-- Bootstrap's check-circle-fill icon sprite (see the Bootstrap docs \"Icons\" alert\n       example), reused by the success alert below via <use>. -->\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"d-none\">\n    <symbol id=\"check-circle-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n    </symbol>\n  </svg>\n  <!-- Fixed to the viewport (see .enrollment-success-alert in the stylesheet) so it never\n       shifts page content when it appears/disappears. [class.show] lets\n       scheduleSuccessAutoDismiss() fade it out via Bootstrap's .fade transition instead of\n       vanishing instantly on *ngIf removal. -->\n  <div class=\"alert alert-success alert-dismissible fade d-inline-block enrollment-success-alert\"\n       [class.show]=\"successAlertVisible\"\n       *ngIf=\"enrollmentMessage && enrollmentMessageType === 'success'\" role=\"alert\">\n    <svg class=\"bi me-2\" width=\"24\" height=\"24\" role=\"img\" aria-label=\"Success:\"><use xlink:href=\"#check-circle-fill\"/></svg>\n    <strong>Success!</strong> {{ enrollmentMessage }}\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n  </div>\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\" style=\"--bs-breadcrumb-divider: '>';\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\" (click)=\"$event.preventDefault()\">Configure</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Course Enrollment</li>\n    </ol>\n  </nav>\n\n  <!-- The search bar is centered on the row itself (see .course-enrollment-heading-row/\n       .global-search-wrapper in the stylesheet), not just pushed to one side, so it stays in\n       the middle regardless of how wide the heading text is. Stays stacked below the heading\n       (full width) until xl, where the sidebar + heading finally leave enough room for a\n       centered search box beside it without the two overlapping. -->\n  <div class=\"d-flex flex-column flex-xl-row align-items-xl-center gap-2 mb-4 course-enrollment-heading-row\">\n    <h2 class=\"mb-0\">Course Enrollment</h2>\n    <div class=\"global-search-wrapper\">\n      <input type=\"text\" class=\"form-control global-search-input\"\n             placeholder=\"Search...\"\n             [ngModel]=\"globalSearchText\" (ngModelChange)=\"setGlobalSearchText($event)\">\n    </div>\n  </div>\n\n  <!-- Cascading filter dropdowns -->\n  <div class=\"card mb-4\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-lg mb-3\">\n          <label for=\"academicYear\" class=\"font-weight-bold d-block\">Academic Year</label>\n          <div class=\"dropdown\">\n            <button type=\"button\" id=\"academicYear\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <span>{{ selectedYear || 'Select Academic Year' }}</span>\n            </button>\n            <ul class=\"dropdown-menu w-100\" aria-labelledby=\"academicYear\">\n              <li *ngFor=\"let y of academicYears\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectYear(y.year)\">{{ y.year }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-lg mb-3\">\n          <label for=\"degree\" class=\"font-weight-bold d-block\">Degree</label>\n          <div class=\"dropdown\">\n            <button type=\"button\" id=\"degree\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <span>{{ selectedDegree || 'Select Degree' }}</span>\n            </button>\n            <ul class=\"dropdown-menu w-100\" aria-labelledby=\"degree\">\n              <li *ngFor=\"let d of degrees\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectDegree(d.name)\">{{ d.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-lg mb-3\">\n          <label for=\"department\" class=\"font-weight-bold d-block\">Department</label>\n          <div class=\"dropdown\">\n            <button type=\"button\" id=\"department\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <span>{{ selectedDepartment || 'Select Department' }}</span>\n            </button>\n            <ul class=\"dropdown-menu w-100\" aria-labelledby=\"department\">\n              <li *ngFor=\"let dep of departments\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectDepartment(dep.name)\">{{ dep.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-lg mb-3\">\n          <label for=\"semester\" class=\"font-weight-bold d-block\">Semester</label>\n          <div class=\"dropdown\">\n            <button type=\"button\" id=\"semester\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <span>{{ selectedSemester || 'Select Semester' }}</span>\n            </button>\n            <ul class=\"dropdown-menu w-100\" aria-labelledby=\"semester\">\n              <li *ngFor=\"let s of semesters\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectSemester(s.name)\">{{ s.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-lg mb-3\">\n          <label for=\"section\" class=\"font-weight-bold d-block\">Section</label>\n          <div class=\"dropdown\">\n            <button type=\"button\" id=\"section\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <span>{{ selectedSection || 'Select Section' }}</span>\n            </button>\n            <ul class=\"dropdown-menu w-100\" aria-labelledby=\"section\">\n              <li *ngFor=\"let sec of sections\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectSection(sec)\">{{ sec }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mb-4\">\n    <div class=\"card-header enrollment-summary-header d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2\" *ngIf=\"courses && courses.length > 0\">\n      <div class=\"fw-bold\">Total # of students : {{ totalStudentsForDegreeAndDepartment }}</div>\n\n      <div class=\"d-flex flex-column flex-sm-row gap-2\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#uploadElectiveModal\">\n          <i class=\"ph ph-upload-simple me-2\"></i>Upload for Elective Course\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"enrollStudents()\">\n          <i class=\"ph ph-check-square me-2\"></i>Enroll\n        </button>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <!-- Success case is the page-level toast above; this only handles errors. -->\n      <div class=\"alert alert-danger\" *ngIf=\"enrollmentMessage && enrollmentMessageType === 'danger'\" role=\"alert\">\n        {{ enrollmentMessage }}\n      </div>\n\n      <ng-container *ngIf=\"isSelectionComplete\">\n\n        <!-- Empty state: covers both \"no entry at all for this combination\" (courses === null)\n             and \"valid combination, but no courses defined\" (courses.length === 0). Plain\n             centered text, not an alert box - no background/border/color, per design. -->\n        <div class=\"text-center text-muted py-5\" *ngIf=\"courses === null || (courses && courses.length === 0)\">\n          <h4>Course enrollment configuration is not available for selected semester/section</h4>\n        </div>\n\n        <!-- Outer \"Core Course\" accordion: a plain Bootstrap collapse (no Angular state), so\n             it can't affect toggleCourse()/isExpanded() below. Starts collapsed. Full-width\n             styling is in component.css, not Bootstrap's mx-n3 utility, because this project's\n             compiled Bootstrap build has negative margins disabled. -->\n        <div class=\"accordion\" id=\"coreCoursesAccordion\"\n             [class.core-courses-accordion--has-elective]=\"electiveCourses && electiveCourses.length > 0\"\n             *ngIf=\"courses && courses.length > 0\">\n          <div class=\"accordion-item\">\n            <h2 class=\"accordion-header\" id=\"coreCoursesHeading\">\n              <button type=\"button\" class=\"accordion-button collapsed\" data-bs-toggle=\"collapse\"\n                      data-bs-target=\"#coreCoursesCollapse\" aria-expanded=\"false\"\n                      aria-controls=\"coreCoursesCollapse\">\n                Core Course\n              </button>\n            </h2>\n            <div class=\"accordion-collapse collapse\" id=\"coreCoursesCollapse\"\n                 aria-labelledby=\"coreCoursesHeading\">\n              <div class=\"accordion-body\">\n                <!-- Courses list -->\n                <table class=\"table mb-0 course-list-header\" *ngIf=\"courses && courses.length > 0\">\n                  <thead class=\"table-secondary\">\n                    <tr>\n                      <th>COURSE</th>\n                      <th class=\"text-sm-end\">\n                        <span class=\"enrolled-count-header\"># OF STUDENTS ENROLLED</span>\n                      </th>\n                    </tr>\n                  </thead>\n                </table>\n                <div class=\"accordion\" id=\"courseAccordion\" *ngIf=\"courses && courses.length > 0\">\n                  <div class=\"accordion-item\" *ngFor=\"let course of filteredCoreCourses; trackBy: trackByCourseCode\">\n            <h2 class=\"accordion-header\" [id]=\"'heading-' + course.code\">\n              <button type=\"button\" class=\"accordion-button\" [class.collapsed]=\"!isExpanded(course)\"\n                      [attr.aria-expanded]=\"isExpanded(course)\" [attr.aria-controls]=\"'collapse-' + course.code\"\n                      (click)=\"toggleCourse(course)\">\n                <!-- align-items-start keeps the enrolled count on the name's first line\n                     instead of floating mid-block when a long name wraps on mobile. -->\n                <span class=\"d-flex align-items-start flex-grow-1 me-0 me-sm-5\">\n                  <!-- Name and code in one span (one continuous text run, one fw-bold\n                       appearance) so the strike-through/muted styling below - applied once,\n                       to this whole span - never breaks or looks inconsistent between them. -->\n                  <span class=\"flex-grow-1 fw-bold\" [class.text-decoration-line-through]=\"isCourseRejected(course)\"\n                        [class.text-muted]=\"isCourseRejected(course)\">{{ course.name }} ({{ course.code }})</span>\n                  <span class=\"flex-grow-1 d-flex align-items-center justify-content-end gap-4\">\n                    <span class=\"enrolled-count fw-bold\" [class.text-decoration-line-through]=\"isCourseRejected(course)\"\n                          [class.text-muted]=\"isCourseRejected(course)\">{{ enrolledCount(course) }}</span>\n                    <!-- Opens the modal programmatically, not via data-bs-toggle: stopPropagation\n                         (needed to keep this click out of toggleCourse()) would also block a\n                         delegated data-bs-toggle listener. [class.invisible] (not *ngIf) keeps\n                         its layout space reserved so the count doesn't shift on other rows. -->\n                    <i class=\"ph ph-trash\" [class.invisible]=\"!isCourseRejected(course)\"\n                       [attr.aria-hidden]=\"!isCourseRejected(course)\"\n                       role=\"button\" aria-label=\"Delete course\"\n                       (click)=\"openDeleteConfirmation(course); $event.stopPropagation()\"></i>\n                  </span>\n                </span>\n              </button>\n            </h2>\n\n            <div class=\"accordion-collapse collapse\" [class.show]=\"isExpanded(course)\"\n                 [id]=\"'collapse-' + course.code\" [attr.aria-labelledby]=\"'heading-' + course.code\">\n              <div class=\"accordion-body\" *ngIf=\"isExpanded(course)\">\n                <div class=\"alert alert-light border mb-0\" *ngIf=\"course.students.length === 0\">\n                  No students are enrolled in this course.\n                </div>\n\n                <ng-container *ngIf=\"course.students.length > 0 && getPageInfo(course) as pageInfo\">\n                  <div class=\"card\">\n                    <div class=\"card-body p-0 pb-3\">\n                      <div class=\"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2 px-3 pt-3 pb-3 student-table-controls\">\n                        <div class=\"d-flex align-items-center gap-2\">\n                          <select class=\"form-select form-select-sm entries-per-page-select\" [ngModel]=\"pageInfo.pageSize\"\n                                  (ngModelChange)=\"setPageSize(course, $event)\">\n                            <option *ngFor=\"let size of pageSizeOptions\" [ngValue]=\"size\">{{ size }}</option>\n                          </select>\n                          <span class=\"entries-per-page-label\">entries per page</span>\n                        </div>\n                      </div>\n                      <div class=\"table-responsive\">\n                        <table class=\"table table-sm mb-0 student-table\">\n                          <thead class=\"table-light\">\n                            <tr>\n                              <th class=\"col-checkbox\">\n                                <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"areAllStudentsEnrolled(course)\"\n                                       (change)=\"toggleAllStudents(course, $any($event.target).checked)\">\n                              </th>\n                              <th class=\"col-slno\">SL#</th>\n                              <th class=\"col-candidate-id\">CANDIDATE ID</th>\n                              <th class=\"col-usn\">USN</th>\n                              <th class=\"col-department-id\">DEPARTMENT ID</th>\n                              <th class=\"col-student-name\">STUDENT NAME</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <!-- isRejected/isBacklog are independent flags, not derived from enrolled.\n                                 text-muted is per-<td>, not on <tr>: Bootstrap sets color directly on\n                                 each cell, which beats a color merely inherited from the row. -->\n                            <tr *ngFor=\"let student of pageInfo.pagedStudents; let i = index; trackBy: trackByStudentId\"\n                                [class.text-decoration-line-through]=\"student.isRejected && !student.isBacklog\">\n                              <td class=\"col-checkbox\" [class.text-muted]=\"isStudentLight(student)\">\n                                <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"student.enrolled\"\n                                       (change)=\"setEnrolled(student, $any($event.target).checked)\">\n                              </td>\n                              <td class=\"col-slno\" [class.text-muted]=\"isStudentLight(student)\">{{ pageInfo.startIndex + i + 1 }}</td>\n                              <td class=\"col-candidate-id\" [class.text-muted]=\"isStudentLight(student)\">{{ student.candidateId }}</td>\n                              <td class=\"col-usn\" [class.text-muted]=\"isStudentLight(student)\">{{ student.usn }}</td>\n                              <td class=\"col-department-id\" [class.text-muted]=\"isStudentLight(student)\">{{ selectedDepartmentShortForm }}</td>\n                              <td class=\"col-student-name\" [class.text-muted]=\"isStudentLight(student)\">{{ student.name }}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2 mt-2 student-table-pagination\">\n                    <div class=\"text-muted small\">\n                      Showing {{ pageInfo.showingFrom }} to {{ pageInfo.showingTo }} of {{ pageInfo.totalStudents }} entries\n                    </div>\n                    <nav aria-label=\"Student pagination\" *ngIf=\"pageInfo.totalPages > 1\">\n                      <ul class=\"pagination pagination-sm mb-0 student-table-page-numbers\">\n                        <li class=\"page-item\" [class.disabled]=\"pageInfo.currentPage === 1\">\n                          <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\" (click)=\"setPage(course, pageInfo.currentPage - 1)\">\n                            <i class=\"ph ph-caret-left\" aria-hidden=\"true\"></i>\n                          </a>\n                        </li>\n                        <li class=\"page-item\" *ngFor=\"let p of pageInfo.pageNumbers\" [class.active]=\"p === pageInfo.currentPage\">\n                          <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"setPage(course, p)\">{{ p }}</a>\n                        </li>\n                        <li class=\"page-item\" [class.disabled]=\"pageInfo.currentPage === pageInfo.totalPages\">\n                          <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\" (click)=\"setPage(course, pageInfo.currentPage + 1)\">\n                            <i class=\"ph ph-caret-right\" aria-hidden=\"true\"></i>\n                          </a>\n                        </li>\n                      </ul>\n                    </nav>\n                  </div>\n                </ng-container>\n\n                <div class=\"mt-3\" *ngIf=\"course.students.length > 0\">\n                  <h3 class=\"h6\">Enrollment Summary</h3>\n                  <div>Total # of students : {{ totalStudentsForDegreeAndDepartment }}</div>\n                  <div># of students enrolling for {{ course.name }} : {{ enrolledCount(course) }}</div>\n                  <div># of students deleting from {{ course.name }} : {{ deletingCount(course) }}</div>\n                  <div># of students pending : {{ pendingCount(course) }}</div>\n                </div>\n\n                <div class=\"d-flex flex-column-reverse flex-sm-row justify-content-sm-end gap-2 mt-3\" *ngIf=\"course.students.length > 0\">\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"resetCourse(course)\">\n                    <i class=\"ph ph-arrows-clockwise me-1\"></i>Reset\n                  </button>\n                  <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\"\n                          data-bs-target=\"#enrollConfirmModal\" (click)=\"openSaveConfirmation(course)\">\n                    <i class=\"ph ph-floppy-disk me-1\"></i>Save\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Mirrors the Core Course accordion above but with its own ids and state\n             (electiveCourses/isElectiveExpanded/toggleElectiveCourse), so the two never\n             affect each other. Hidden entirely when this combination has no elective data. -->\n        <div class=\"accordion\" id=\"electiveCoursesAccordion\" *ngIf=\"electiveCourses && electiveCourses.length > 0\">\n          <div class=\"accordion-item\">\n            <h2 class=\"accordion-header\" id=\"electiveCoursesHeading\">\n              <button type=\"button\" class=\"accordion-button collapsed\" data-bs-toggle=\"collapse\"\n                      data-bs-target=\"#electiveCoursesCollapse\" aria-expanded=\"false\"\n                      aria-controls=\"electiveCoursesCollapse\">\n                Elective Course\n              </button>\n            </h2>\n            <div class=\"accordion-collapse collapse\" id=\"electiveCoursesCollapse\"\n                 aria-labelledby=\"electiveCoursesHeading\">\n              <div class=\"accordion-body\">\n                <table class=\"table mb-0 course-list-header\" *ngIf=\"electiveCourses && electiveCourses.length > 0\">\n                  <thead class=\"table-secondary\">\n                    <tr>\n                      <th>COURSE</th>\n                      <th class=\"text-sm-end\">\n                        <span class=\"enrolled-count-header\"># OF STUDENTS ENROLLED</span>\n                      </th>\n                    </tr>\n                  </thead>\n                </table>\n                <div class=\"accordion\" id=\"electiveCourseAccordion\" *ngIf=\"electiveCourses && electiveCourses.length > 0\">\n                  <div class=\"accordion-item\" *ngFor=\"let course of filteredElectiveCourses; trackBy: trackByCourseCode\">\n                    <h2 class=\"accordion-header\" [id]=\"'elective-heading-' + course.code\">\n                      <button type=\"button\" class=\"accordion-button\" [class.collapsed]=\"!isElectiveExpanded(course)\"\n                              [attr.aria-expanded]=\"isElectiveExpanded(course)\" [attr.aria-controls]=\"'elective-collapse-' + course.code\"\n                              (click)=\"toggleElectiveCourse(course)\">\n                        <span class=\"d-flex align-items-start flex-grow-1 me-0 me-sm-5\">\n                          <!-- Name and code in one span (one continuous text run, one fw-bold\n                               appearance) so the strike-through/muted styling below - applied\n                               once, to this whole span - never breaks or looks inconsistent\n                               between them. -->\n                          <span class=\"flex-grow-1 fw-bold\" [class.text-decoration-line-through]=\"isCourseRejected(course)\"\n                                [class.text-muted]=\"isCourseRejected(course)\">{{ course.name }} ({{ course.code }})</span>\n                          <span class=\"flex-grow-1 d-flex align-items-center justify-content-end gap-4\">\n                            <span class=\"enrolled-count fw-bold\" [class.text-decoration-line-through]=\"isCourseRejected(course)\"\n                                  [class.text-muted]=\"isCourseRejected(course)\">{{ enrolledCount(course) }}</span>\n                            <i class=\"ph ph-trash\" [class.invisible]=\"!isCourseRejected(course)\"\n                               [attr.aria-hidden]=\"!isCourseRejected(course)\"\n                               role=\"button\" aria-label=\"Delete course\"\n                               (click)=\"openDeleteConfirmation(course, 'elective'); $event.stopPropagation()\"></i>\n                          </span>\n                        </span>\n                      </button>\n                    </h2>\n\n                    <div class=\"accordion-collapse collapse\" [class.show]=\"isElectiveExpanded(course)\"\n                         [id]=\"'elective-collapse-' + course.code\" [attr.aria-labelledby]=\"'elective-heading-' + course.code\">\n                      <div class=\"accordion-body\" *ngIf=\"isElectiveExpanded(course)\">\n                        <div class=\"alert alert-light border mb-0\" *ngIf=\"course.students.length === 0\">\n                          No students are enrolled in this course.\n                        </div>\n\n                        <ng-container *ngIf=\"course.students.length > 0 && getPageInfo(course, 'elective') as pageInfo\">\n                          <div class=\"card\">\n                            <div class=\"card-body p-0 pb-3\">\n                              <div class=\"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2 px-3 pt-3 pb-3 student-table-controls\">\n                                <div class=\"d-flex align-items-center gap-2\">\n                                  <select class=\"form-select form-select-sm entries-per-page-select\" [ngModel]=\"pageInfo.pageSize\"\n                                          (ngModelChange)=\"setPageSize(course, $event, 'elective')\">\n                                    <option *ngFor=\"let size of pageSizeOptions\" [ngValue]=\"size\">{{ size }}</option>\n                                  </select>\n                                  <span class=\"entries-per-page-label\">entries per page</span>\n                                </div>\n                              </div>\n                              <div class=\"table-responsive\">\n                                <table class=\"table table-sm mb-0 student-table\">\n                                  <thead class=\"table-light\">\n                                    <tr>\n                                      <th class=\"col-checkbox\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"areAllStudentsEnrolled(course)\"\n                                               (change)=\"toggleAllStudents(course, $any($event.target).checked)\">\n                                      </th>\n                                      <th class=\"col-slno\">SL#</th>\n                                      <th class=\"col-candidate-id\">CANDIDATE ID</th>\n                                      <th class=\"col-usn\">USN</th>\n                                      <th class=\"col-department-id\">DEPARTMENT ID</th>\n                                      <th class=\"col-student-name\">STUDENT NAME</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let student of pageInfo.pagedStudents; let i = index; trackBy: trackByStudentId\"\n                                        [class.text-decoration-line-through]=\"student.isRejected && !student.isBacklog\">\n                                      <td class=\"col-checkbox\" [class.text-muted]=\"isStudentLight(student)\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"student.enrolled\"\n                                               (change)=\"setEnrolled(student, $any($event.target).checked)\">\n                                      </td>\n                                      <td class=\"col-slno\" [class.text-muted]=\"isStudentLight(student)\">{{ pageInfo.startIndex + i + 1 }}</td>\n                                      <td class=\"col-candidate-id\" [class.text-muted]=\"isStudentLight(student)\">{{ student.candidateId }}</td>\n                                      <td class=\"col-usn\" [class.text-muted]=\"isStudentLight(student)\">{{ student.usn }}</td>\n                                      <td class=\"col-department-id\" [class.text-muted]=\"isStudentLight(student)\">{{ selectedDepartmentShortForm }}</td>\n                                      <td class=\"col-student-name\" [class.text-muted]=\"isStudentLight(student)\">{{ student.name }}</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                            </div>\n                          </div>\n\n                          <div class=\"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center gap-2 mt-2 student-table-pagination\">\n                            <div class=\"text-muted small\">\n                              Showing {{ pageInfo.showingFrom }} to {{ pageInfo.showingTo }} of {{ pageInfo.totalStudents }} entries\n                            </div>\n                            <nav aria-label=\"Student pagination\" *ngIf=\"pageInfo.totalPages > 1\">\n                              <ul class=\"pagination pagination-sm mb-0 student-table-page-numbers\">\n                                <li class=\"page-item\" [class.disabled]=\"pageInfo.currentPage === 1\">\n                                  <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\" (click)=\"setPage(course, pageInfo.currentPage - 1, 'elective')\">\n                                    <i class=\"ph ph-caret-left\" aria-hidden=\"true\"></i>\n                                  </a>\n                                </li>\n                                <li class=\"page-item\" *ngFor=\"let p of pageInfo.pageNumbers\" [class.active]=\"p === pageInfo.currentPage\">\n                                  <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"setPage(course, p, 'elective')\">{{ p }}</a>\n                                </li>\n                                <li class=\"page-item\" [class.disabled]=\"pageInfo.currentPage === pageInfo.totalPages\">\n                                  <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\" (click)=\"setPage(course, pageInfo.currentPage + 1, 'elective')\">\n                                    <i class=\"ph ph-caret-right\" aria-hidden=\"true\"></i>\n                                  </a>\n                                </li>\n                              </ul>\n                            </nav>\n                          </div>\n                        </ng-container>\n\n                        <div class=\"mt-3\" *ngIf=\"course.students.length > 0\">\n                          <h3 class=\"h6\">Enrollment Summary</h3>\n                          <div>Total # of students : {{ totalStudentsForDegreeAndDepartment }}</div>\n                          <div># of students enrolling for {{ course.name }} : {{ enrolledCount(course) }}</div>\n                          <div># of students deleting from {{ course.name }} : {{ deletingCount(course) }}</div>\n                          <div># of students pending : {{ pendingCount(course) }}</div>\n                        </div>\n\n                        <div class=\"d-flex flex-column-reverse flex-sm-row justify-content-sm-end gap-2 mt-3\" *ngIf=\"course.students.length > 0\">\n                          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"resetCourse(course)\">\n                            <i class=\"ph ph-arrows-clockwise me-1\"></i>Reset\n                          </button>\n                          <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\"\n                                  data-bs-target=\"#enrollConfirmModal\" (click)=\"openSaveConfirmation(course, 'elective')\">\n                            <i class=\"ph ph-floppy-disk me-1\"></i>Save\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </ng-container>\n    </div>\n  </div>\n\n  <!-- One shared modal (not one per course), populated from whichever course's Save was clicked. -->\n  <div class=\"modal fade\" id=\"enrollConfirmModal\" tabindex=\"-1\" aria-labelledby=\"enrollConfirmModalLabel\"\n       aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"enrollConfirmModalLabel\">Enrollment Confirmation</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\" *ngIf=\"courseToSave\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div>Total # of students : {{ totalStudentsForDegreeAndDepartment }}</div>\n              <div># of students enrolling for {{ courseToSave.name }} : {{ enrolledCount(courseToSave) }}</div>\n              <div># of students deleting from {{ courseToSave.name }} : {{ deletingCount(courseToSave) }}</div>\n              <div># of students pending : {{ pendingCount(courseToSave) }}</div>\n            </div>\n          </div>\n          <p class=\"mt-3 mb-0\">Are you sure you want to save enrollment?</p>\n        </div>\n        <!-- flex-column-reverse stacks these full-width on mobile (align-items-stretch overrides\n             Bootstrap's align-items: center) and puts Save above Cancel by rendering the last DOM\n             child first, while DOM order (and the sm+ row order) stays Cancel, Save. -->\n        <div class=\"modal-footer flex-column-reverse flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-end\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" (click)=\"confirmEnrollment()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Upload Elective Course modal: one shared instance, opened by the header button. -->\n  <div class=\"modal fade\" id=\"uploadElectiveModal\" tabindex=\"-1\" aria-labelledby=\"uploadElectiveModalLabel\"\n       aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"uploadElectiveModalLabel\">Course Enrollment Upload</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cancelUpload()\"></button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"mb-3\">\n            <label class=\"font-weight-bold d-block\">Elective Course</label>\n            <div class=\"dropdown\">\n              <button type=\"button\" id=\"electiveCourseDropdown\" class=\"btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center\"\n                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                <span>{{ electiveCourseForUpload ? electiveCourseForUpload.name + ' (' + electiveCourseForUpload.code + ')' : 'Select Course' }}</span>\n              </button>\n              <ul class=\"dropdown-menu w-100\" aria-labelledby=\"electiveCourseDropdown\">\n                <li *ngFor=\"let electiveCourse of availableElectiveCourses\">\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"selectElectiveCourseForUpload(electiveCourse)\">\n                    {{ electiveCourse.name }} ({{ electiveCourse.code }})\n                  </a>\n                </li>\n                <li *ngIf=\"availableElectiveCourses.length === 0\">\n                  <span class=\"dropdown-item disabled\">No courses available</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"mb-0\">\n            <label for=\"electiveFileInput\" class=\"font-weight-bold d-block\">Excel File</label>\n            <input type=\"file\" id=\"electiveFileInput\" class=\"form-control\" [class.is-invalid]=\"uploadFileError\"\n                   accept=\".xlsx,.xls\" (change)=\"onUploadFileSelected($event)\">\n            <div class=\"invalid-feedback\" *ngIf=\"uploadFileError\">{{ uploadFileError }}</div>\n          </div>\n        </div>\n        <!-- flex-column-reverse/align-items-stretch: same reasoning as the Enrollment\n             Confirmation modal's footer above - reorders to Upload, Download Template, Cancel. -->\n        <div class=\"modal-footer flex-column-reverse flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-end\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" (click)=\"cancelUpload()\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!canDownloadElectiveTemplate\"\n                  (click)=\"downloadElectiveTemplate()\">Download Template</button>\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!canUploadElectiveFile\"\n                  data-bs-dismiss=\"modal\" (click)=\"uploadElectiveFile()\">Upload</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Delete Confirmation modal: one shared instance, opened via openDeleteConfirmation(). -->\n  <div class=\"modal fade\" id=\"deleteConfirmModal\" tabindex=\"-1\" aria-labelledby=\"deleteConfirmModalLabel\"\n       aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"deleteConfirmModalLabel\">Delete Confirmation</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\" *ngIf=\"courseToDelete\">\n          <p class=\"mb-0\">\n            Are you sure you want to delete <strong>{{ courseToDelete.name }}</strong>\n            ({{ courseToDelete.code }})?\n          </p>\n        </div>\n        <!-- flex-column-reverse/align-items-stretch: same reasoning as the Enrollment\n             Confirmation modal's footer above - reorders to Delete, Cancel. -->\n        <div class=\"modal-footer flex-column-reverse flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-end\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\" (click)=\"confirmDeleteCourse()\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-wise-enrollment/course-wise-enrollment.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/course-wise-enrollment/course-wise-enrollment.component.ts ***!
  \****************************************************************************/
/*! exports provided: CourseWiseEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseWiseEnrollmentComponent", function() { return CourseWiseEnrollmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-enrollment-data */ "./src/app/course-wise-enrollment/mock-enrollment-data.ts");



var CourseWiseEnrollmentComponent = /** @class */ (function () {
    function CourseWiseEnrollmentComponent() {
        this.academicYears = _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ACADEMIC_YEARS"];
        this.statuses = _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_STATUSES"];
        this.degrees = [];
        this.departments = [];
        this.semesters = [];
        this.sections = [];
        this.selectedYear = '';
        this.selectedDegree = '';
        this.selectedDepartment = '';
        this.selectedSemester = '';
        this.selectedSection = '';
        // undefined = selection incomplete, null = no data found for the combination,
        // [] = valid combination but no courses defined, non-empty array = courses to show.
        this.courses = undefined;
        // Same undefined/null/[]/array semantics as `courses` above, but for the Elective Course
        // section - sourced from ELECTIVE_ENROLLMENT_DATA instead of ENROLLMENT_DATA, and kept
        // entirely separate so it can never affect totalStudentsForDegreeAndDepartment (which only
        // ever reads `courses`) or Core Course's own state.
        this.electiveCourses = undefined;
        // One global search box (in the heading row) that filters both Core and Elective course
        // lists - matching a course's own name/code, or any of its students' candidate ID/USN/name,
        // shows that course so it can be opened. Replaces the old per-course table search entirely;
        // it never touches `courses`/`electiveCourses` themselves, only which of them are displayed.
        this.globalSearchText = '';
        this.enrollmentMessage = null;
        this.enrollmentMessageType = 'success';
        // Drives the success toast's Bootstrap `.show` class so it can fade out (not just
        // vanish instantly, which is what *ngIf removal alone would do).
        this.successAlertVisible = false;
        // The course whose Save button opened the Enrollment Confirmation modal - drives the
        // modal's displayed counts. The modal element itself is shared/single-instance rather
        // than duplicated per course.
        this.courseToSave = null;
        // Upload Elective Course modal state.
        this.electiveCourseForUpload = null;
        this.uploadFile = null;
        this.uploadFileError = null;
        // The course whose delete/trash icon opened the Delete Confirmation modal - drives the
        // modal's displayed course name/code. Shared/single modal instance, not one per course.
        this.courseToDelete = null;
        // Which list courseToSave/courseToDelete belongs to, so the shared Enrollment Confirmation
        // and Delete Confirmation modals persist their action back to the correct data source
        // (ENROLLMENT_DATA vs ELECTIVE_ENROLLMENT_DATA) and reload the correct section. Defaults to
        // 'core' so every existing Core Course call site is unaffected.
        this.courseToSaveList = 'core';
        this.courseToDeleteList = 'core';
        this.expandedCourseCodes = new Set();
        this.expandedElectiveCourseCodes = new Set();
        this.pageSizeOptions = [5, 10, 15, 20, 50, 100];
        // Per-course pagination/search state, keyed by course code - kept entirely separate from
        // Core/Elective's other independent state (expandedCourseCodes etc.) above, and separate
        // per list so a Core and an Elective course sharing the same code can never collide.
        this.corePagingState = new Map();
        this.electivePagingState = new Map();
    }
    CourseWiseEnrollmentComponent.prototype.ngOnInit = function () {
        // Pre-select the first available option at each level on load, cascading down exactly
        // the way a user's own clicks would (reusing the same select*() methods), rather than
        // starting on a blank "please select..." screen.
        if (this.academicYears.length === 0) {
            return;
        }
        this.selectYear(this.academicYears[0].year);
        if (this.degrees.length === 0) {
            return;
        }
        this.selectDegree(this.degrees[0].name);
        if (this.departments.length === 0) {
            return;
        }
        this.selectDepartment(this.departments[0].name);
        if (this.semesters.length === 0) {
            return;
        }
        this.selectSemester(this.semesters[0].name);
        if (this.sections.length === 0) {
            return;
        }
        this.selectSection(this.sections[0]);
    };
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "isSelectionComplete", {
        get: function () {
            return !!(this.selectedYear && this.selectedDegree && this.selectedDepartment &&
                this.selectedSemester && this.selectedSection);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "totalStudentsForDegreeAndDepartment", {
        // Total unique students across the courses currently on screen, i.e. for the exact
        // Academic Year, Degree, Department, Semester and Section combination selected.
        // A student enrolled in more than one course under that combination is counted once,
        // identified by candidateId (their real-world identity, distinct from the per-record id).
        get: function () {
            if (!this.courses) {
                return 0;
            }
            var uniqueCandidateIds = new Set();
            this.courses.forEach(function (c) { return c.students.forEach(function (s) { return uniqueCandidateIds.add(s.candidateId); }); });
            return uniqueCandidateIds.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "availableElectiveCourses", {
        // Elective courses available to upload against are simply the courses currently loaded
        // for the selected combination - there is no separate "elective" data source. Deliberately
        // not affected by globalSearchText: the upload dropdown should still offer every course
        // regardless of what's currently being searched for.
        get: function () {
            return this.courses || [];
        },
        enumerable: true,
        configurable: true
    });
    // Mirrors what the old per-course search used to do on every keystroke: jump back to page 1,
    // since whatever page a course was on may no longer line up with its newly filtered results.
    // Applied to every course up front (not lazily inside getPageInfo) so a course that's back on
    // page 1 after a search still starts at page 1 if the user clears the search afterward, too.
    //
    // With no active search, accordion state is never touched here - every course keeps whatever
    // open/closed state the user last set manually, and toggleCourse()/toggleElectiveCourse() go
    // on working exactly as they always did.
    //
    // With an active search, both accordion levels are entirely RECOMPUTED from the current term
    // on every keystroke (not just added to), independently for Core and Elective:
    //  - The outer "Core Course"/"Elective Course" section - a plain Bootstrap collapse with no
    //    Angular state of its own (#coreCoursesCollapse/#electiveCoursesCollapse in the template)
    //    - opens whenever that list has at least one matching course (by name/code OR by a
    //    student), via the Bootstrap JS API the same way openDeleteConfirmation() already opens
    //    the delete modal, and closes again the moment nothing in that list matches anymore.
    //  - Each individual course's own accordion (expandedCourseCodes/expandedElectiveCourseCodes)
    //    is replaced outright with exactly the set of courses matched via a student this time -
    //    never courses matched only by name/code, and never anything left over from an earlier,
    //    different search term.
    CourseWiseEnrollmentComponent.prototype.setGlobalSearchText = function (searchText) {
        var _this = this;
        this.globalSearchText = searchText;
        this.corePagingState.forEach(function (state) { state.page = 1; });
        this.electivePagingState.forEach(function (state) { state.page = 1; });
        var term = this.globalSearchText.trim().toLowerCase();
        if (!term) {
            return;
        }
        var coreHasAnyMatch = false;
        var coreStudentMatchedCodes = new Set();
        (this.courses || []).forEach(function (course) {
            if (_this.courseMatchesGlobalSearch(course)) {
                coreHasAnyMatch = true;
            }
            if (_this.courseHasMatchingStudent(course, term)) {
                coreStudentMatchedCodes.add(course.code);
            }
        });
        this.expandedCourseCodes = coreStudentMatchedCodes;
        this.setOuterSectionOpen('coreCoursesCollapse', coreHasAnyMatch);
        var electiveHasAnyMatch = false;
        var electiveStudentMatchedCodes = new Set();
        (this.electiveCourses || []).forEach(function (course) {
            if (_this.courseMatchesGlobalSearch(course)) {
                electiveHasAnyMatch = true;
            }
            if (_this.courseHasMatchingStudent(course, term)) {
                electiveStudentMatchedCodes.add(course.code);
            }
        });
        this.expandedElectiveCourseCodes = electiveStudentMatchedCodes;
        this.setOuterSectionOpen('electiveCoursesCollapse', electiveHasAnyMatch);
    };
    CourseWiseEnrollmentComponent.prototype.setOuterSectionOpen = function (collapseElementId, open) {
        var collapseElement = document.getElementById(collapseElementId);
        var bootstrapGlobal = window.bootstrap;
        if (!collapseElement || !bootstrapGlobal) {
            return;
        }
        var instance = bootstrapGlobal.Collapse.getOrCreateInstance(collapseElement, { toggle: false });
        if (open) {
            instance.show();
        }
        else {
            instance.hide();
        }
    };
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "filteredCoreCourses", {
        // Core Course's own list, filtered down to the courses that match globalSearchText - either
        // the course's own name/code, or one of its students' candidate ID/USN/name. An empty search
        // matches everything, so this is a pure display filter: it never mutates `courses` itself,
        // and totalStudentsForDegreeAndDepartment/enrolledCount etc. all keep reading the unfiltered
        // `courses`/`electiveCourses` above, same as before search existed.
        get: function () {
            var _this = this;
            if (!this.courses) {
                return this.courses;
            }
            return this.courses.filter(function (course) { return _this.courseMatchesGlobalSearch(course); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "filteredElectiveCourses", {
        // Elective Course's equivalent of filteredCoreCourses above, entirely independent of it.
        get: function () {
            var _this = this;
            if (!this.electiveCourses) {
                return this.electiveCourses;
            }
            return this.electiveCourses.filter(function (course) { return _this.courseMatchesGlobalSearch(course); });
        },
        enumerable: true,
        configurable: true
    });
    CourseWiseEnrollmentComponent.prototype.courseMatchesGlobalSearch = function (course) {
        var term = this.globalSearchText.trim().toLowerCase();
        if (!term) {
            return true;
        }
        if (this.courseMatchesByNameOrCode(course, term)) {
            return true;
        }
        return this.courseHasMatchingStudent(course, term);
    };
    CourseWiseEnrollmentComponent.prototype.courseMatchesByNameOrCode = function (course, term) {
        return course.name.toLowerCase().includes(term) || course.code.toLowerCase().includes(term);
    };
    // Whether the search term matches one of this course's students specifically (as opposed to
    // the course's own name/code) - this is what decides both the student-level table filtering
    // in getPageInfo() and the auto-expand in setGlobalSearchText() above, searching this
    // course's complete student list regardless of which page is currently visible or whether
    // the course's accordion happens to be open right now.
    CourseWiseEnrollmentComponent.prototype.courseHasMatchingStudent = function (course, term) {
        var _this = this;
        return course.students.some(function (student) { return _this.studentMatchesGlobalSearch(student, term); });
    };
    CourseWiseEnrollmentComponent.prototype.studentMatchesGlobalSearch = function (student, term) {
        return student.candidateId.toLowerCase().includes(term) ||
            student.usn.toLowerCase().includes(term) ||
            student.name.toLowerCase().includes(term);
    };
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "canDownloadElectiveTemplate", {
        get: function () {
            return !!this.electiveCourseForUpload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "canUploadElectiveFile", {
        get: function () {
            return !!this.electiveCourseForUpload && !!this.uploadFile && !this.uploadFileError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseWiseEnrollmentComponent.prototype, "selectedDepartmentShortForm", {
        // The Department ID column in the student tables (Core and Elective both draw from the
        // same selected Degree+Department+Semester+Section population) shows this same value for
        // every row, since Department is a property of the current selection, not of each student.
        get: function () {
            var _this = this;
            var departmentNode = this.departments.find(function (d) { return d.name === _this.selectedDepartment; });
            return departmentNode ? departmentNode.shortForm : '';
        },
        enumerable: true,
        configurable: true
    });
    // Cascades down exactly like ngOnInit()'s own initial auto-select: whenever a parent
    // dropdown changes, the next level down is repopulated and, if it has any options,
    // immediately auto-selected to its first one (via select*(), which chains into the next
    // on*Change() in turn) rather than left blank - only a level with no options at all for the
    // new combination falls back to resetFrom(), clearing everything from there down.
    CourseWiseEnrollmentComponent.prototype.onYearChange = function () {
        var _this = this;
        var yearNode = this.academicYears.find(function (y) { return y.year === _this.selectedYear; });
        this.degrees = yearNode ? yearNode.degrees : [];
        if (this.degrees.length > 0) {
            this.selectDegree(this.degrees[0].name);
        }
        else {
            this.resetFrom('degree');
        }
    };
    CourseWiseEnrollmentComponent.prototype.onDegreeChange = function () {
        var _this = this;
        var degreeNode = this.degrees.find(function (d) { return d.name === _this.selectedDegree; });
        this.departments = degreeNode ? degreeNode.departments : [];
        if (this.departments.length > 0) {
            this.selectDepartment(this.departments[0].name);
        }
        else {
            this.resetFrom('department');
        }
    };
    CourseWiseEnrollmentComponent.prototype.onDepartmentChange = function () {
        var _this = this;
        var departmentNode = this.departments.find(function (dep) { return dep.name === _this.selectedDepartment; });
        this.semesters = departmentNode ? departmentNode.semesters : [];
        if (this.semesters.length > 0) {
            this.selectSemester(this.semesters[0].name);
        }
        else {
            this.resetFrom('semester');
        }
    };
    CourseWiseEnrollmentComponent.prototype.onSemesterChange = function () {
        var _this = this;
        var semesterNode = this.semesters.find(function (s) { return s.name === _this.selectedSemester; });
        this.sections = semesterNode ? semesterNode.sections : [];
        if (this.sections.length > 0) {
            this.selectSection(this.sections[0]);
        }
        else {
            this.resetFrom('section');
        }
    };
    CourseWiseEnrollmentComponent.prototype.onSectionChange = function () {
        this.loadCourses();
    };
    CourseWiseEnrollmentComponent.prototype.selectYear = function (year) {
        this.selectedYear = year;
        this.onYearChange();
    };
    CourseWiseEnrollmentComponent.prototype.selectDegree = function (name) {
        this.selectedDegree = name;
        this.onDegreeChange();
    };
    CourseWiseEnrollmentComponent.prototype.selectDepartment = function (name) {
        this.selectedDepartment = name;
        this.onDepartmentChange();
    };
    CourseWiseEnrollmentComponent.prototype.selectSemester = function (name) {
        this.selectedSemester = name;
        this.onSemesterChange();
    };
    CourseWiseEnrollmentComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
        this.onSectionChange();
    };
    /**
     * Resets the selection chain starting at the given dropdown level (inclusive),
     * clearing every downstream dropdown's selection/options and any displayed
     * enrollment data.
     */
    CourseWiseEnrollmentComponent.prototype.resetFrom = function (level) {
        if (level === 'degree') {
            this.selectedDegree = '';
            this.departments = [];
        }
        if (level === 'degree' || level === 'department') {
            this.selectedDepartment = '';
            this.semesters = [];
        }
        if (level === 'degree' || level === 'department' || level === 'semester') {
            this.selectedSemester = '';
            this.sections = [];
        }
        this.selectedSection = '';
        this.courses = undefined;
        this.electiveCourses = undefined;
        this.expandedCourseCodes.clear();
        this.expandedElectiveCourseCodes.clear();
        this.corePagingState.clear();
        this.electivePagingState.clear();
        this.globalSearchText = '';
        this.enrollmentMessage = null;
    };
    CourseWiseEnrollmentComponent.prototype.loadCourses = function () {
        this.expandedCourseCodes.clear();
        this.expandedElectiveCourseCodes.clear();
        this.corePagingState.clear();
        this.electivePagingState.clear();
        this.globalSearchText = '';
        this.enrollmentMessage = null;
        if (!this.isSelectionComplete) {
            this.courses = undefined;
            this.electiveCourses = undefined;
            return;
        }
        var key = Object(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["buildEnrollmentKey"])(this.selectedYear, this.selectedDegree, this.selectedDepartment, this.selectedSemester, this.selectedSection);
        this.courses = this.hydrateCourses(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"], key);
        this.electiveCourses = this.hydrateCourses(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"], key);
    };
    // Shared by both Core and Elective Course loading. Clones the matched courses/students
    // rather than handing out live references into the given raw data source - setEnrolled()
    // etc. mutate a student in place, so without cloning, edits made for one selection would
    // permanently leak into that data source and reappear the next time the same combination
    // is loaded (e.g. after navigating away and back, or - as observed in tests - across
    // independent test cases sharing the same module-level mock data).
    //
    // `enrolled`/`isRejected` are hydrated here, once, from the raw `status` seed value - but
    // only when not already explicitly set (e.g. from a prior save, which persists these
    // fields back into the data source). From this point on, nothing reads `.status` again.
    CourseWiseEnrollmentComponent.prototype.hydrateCourses = function (data, key) {
        if (!data.hasOwnProperty(key)) {
            return null;
        }
        return data[key].map(function (course) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course, { isRejected: course.isRejected === true, students: course.students.map(function (student) {
                var enrolled = student.enrolled !== undefined ? student.enrolled : student.status === 'Enrolled';
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, student, { enrolled: enrolled, originallyEnrolled: enrolled, isRejected: student.isRejected !== undefined ? student.isRejected : student.status === 'Dropped' });
            }) })); });
    };
    CourseWiseEnrollmentComponent.prototype.toggleCourse = function (course) {
        if (this.expandedCourseCodes.has(course.code)) {
            this.expandedCourseCodes.delete(course.code);
        }
        else {
            this.expandedCourseCodes.add(course.code);
        }
    };
    CourseWiseEnrollmentComponent.prototype.isExpanded = function (course) {
        return this.expandedCourseCodes.has(course.code);
    };
    // Elective Course's own expand/collapse state, entirely separate from expandedCourseCodes
    // above, so toggling an elective course can never affect - or be affected by - Core Course.
    CourseWiseEnrollmentComponent.prototype.toggleElectiveCourse = function (course) {
        if (this.expandedElectiveCourseCodes.has(course.code)) {
            this.expandedElectiveCourseCodes.delete(course.code);
        }
        else {
            this.expandedElectiveCourseCodes.add(course.code);
        }
    };
    CourseWiseEnrollmentComponent.prototype.isElectiveExpanded = function (course) {
        return this.expandedElectiveCourseCodes.has(course.code);
    };
    CourseWiseEnrollmentComponent.prototype.enrolledCount = function (course) {
        return course.students.filter(function (s) { return s.enrolled; }).length;
    };
    // Students who were enrolled as of the last load/save but have since been unchecked.
    CourseWiseEnrollmentComponent.prototype.deletingCount = function (course) {
        return course.students.filter(function (s) { return s.originallyEnrolled && !s.enrolled; }).length;
    };
    // Active/eligible students (not rejected) who were never enrolled and still aren't -
    // distinct from students being deleted, who WERE enrolled before being unchecked.
    CourseWiseEnrollmentComponent.prototype.pendingCount = function (course) {
        return course.students.filter(function (s) { return !s.originallyEnrolled && !s.enrolled && !s.isRejected; }).length;
    };
    // Light row: not enrolled, not rejected, not backlog. Applied per-<td> in the template
    // (see the comment there), so this one condition stays in a single place.
    CourseWiseEnrollmentComponent.prototype.isStudentLight = function (student) {
        return !student.enrolled && !student.isRejected && !student.isBacklog;
    };
    // Toggles only whether the student is currently enrolled. Never touches isRejected -
    // unchecking a student only ever makes them not-enrolled, never rejected.
    CourseWiseEnrollmentComponent.prototype.setEnrolled = function (student, enrolled) {
        student.enrolled = enrolled;
    };
    CourseWiseEnrollmentComponent.prototype.areAllStudentsEnrolled = function (course) {
        return course.students.length > 0 && course.students.every(function (s) { return s.enrolled; });
    };
    CourseWiseEnrollmentComponent.prototype.toggleAllStudents = function (course, enrolled) {
        var _this = this;
        course.students.forEach(function (student) { return _this.setEnrolled(student, enrolled); });
    };
    // Discards unsaved checkbox edits for just this course, reverting every student's
    // `enrolled` back to `originallyEnrolled` (the state as of the last load/save - see
    // hydrateCourses()). Works identically for a Core or an Elective course, since it only
    // ever touches the given course's own students array - it never saves/persists anything,
    // and every derived value (enrolledCount, deletingCount, pendingCount, the checkboxes
    // themselves) picks the change up on the next change detection cycle automatically.
    CourseWiseEnrollmentComponent.prototype.resetCourse = function (course) {
        var _this = this;
        course.students.forEach(function (student) { return _this.setEnrolled(student, !!student.originallyEnrolled); });
    };
    // Course-level rejection is an explicit flag on the course, not derived from student
    // enrollment/rejection state.
    CourseWiseEnrollmentComponent.prototype.isCourseRejected = function (course) {
        return course.isRejected === true;
    };
    // `list` defaults to 'core' so every existing Core Course call site is unaffected.
    //
    // Also removes the course from the underlying ENROLLMENT_DATA/ELECTIVE_ENROLLMENT_DATA
    // entry for the current selection (mirroring how enrollStudents()/enrollElectiveStudents()
    // already persist their own changes back into the same module-level source) - otherwise
    // the deletion only ever existed on the local `courses`/`electiveCourses` clone and would
    // reappear the next time this exact combination is loaded via hydrateCourses().
    CourseWiseEnrollmentComponent.prototype.deleteCourse = function (course, list) {
        if (list === void 0) { list = 'core'; }
        var key = Object(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["buildEnrollmentKey"])(this.selectedYear, this.selectedDegree, this.selectedDepartment, this.selectedSemester, this.selectedSection);
        if (list === 'elective') {
            if (!this.electiveCourses) {
                return;
            }
            this.electiveCourses = this.electiveCourses.filter(function (c) { return c.code !== course.code; });
            if (_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"].hasOwnProperty(key)) {
                _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"][key] = _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"][key].filter(function (c) { return c.code !== course.code; });
            }
            this.electivePagingState.delete(course.code);
            return;
        }
        if (!this.courses) {
            return;
        }
        this.courses = this.courses.filter(function (c) { return c.code !== course.code; });
        if (_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"].hasOwnProperty(key)) {
            _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"][key] = _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"][key].filter(function (c) { return c.code !== course.code; });
        }
        this.corePagingState.delete(course.code);
    };
    // Opens the Delete Confirmation modal for the given course. Shown via the Bootstrap JS
    // API directly (rather than data-bs-toggle/data-bs-target) because this click handler
    // also needs to stopPropagation() so the click doesn't bubble into toggleCourse() on the
    // outer accordion-button - which would otherwise block Bootstrap's own delegated
    // data-bs-toggle listener (on the document ancestor) just as much as toggleCourse().
    CourseWiseEnrollmentComponent.prototype.openDeleteConfirmation = function (course, list) {
        if (list === void 0) { list = 'core'; }
        this.courseToDelete = course;
        this.courseToDeleteList = list;
        var modalElement = document.getElementById('deleteConfirmModal');
        var bootstrapGlobal = window.bootstrap;
        if (modalElement && bootstrapGlobal) {
            bootstrapGlobal.Modal.getOrCreateInstance(modalElement).show();
        }
    };
    // Modal's own Delete action: performs the actual deletion, then clears courseToDelete.
    // The modal closes itself via data-bs-dismiss="modal" on the same button.
    CourseWiseEnrollmentComponent.prototype.confirmDeleteCourse = function () {
        if (this.courseToDelete) {
            this.deleteCourse(this.courseToDelete, this.courseToDeleteList);
        }
        this.courseToDelete = null;
    };
    /**
     * Saves the currently displayed (locally-edited) student enrollment states back into
     * ENROLLMENT_DATA for the selected Academic Year/Degree/Department/Semester/Section, since
     * loadCourses() works on a clone of that data so in-progress checkbox edits don't leak into
     * ENROLLMENT_DATA until explicitly enrolled.
     */
    CourseWiseEnrollmentComponent.prototype.enrollStudents = function () {
        try {
            if (!this.isSelectionComplete) {
                throw new Error('Select an Academic Year, Degree, Department, Semester and Section before enrolling.');
            }
            if (!this.courses || this.courses.length === 0) {
                throw new Error('There are no courses available to enroll students for this combination.');
            }
            var key = Object(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["buildEnrollmentKey"])(this.selectedYear, this.selectedDegree, this.selectedDepartment, this.selectedSemester, this.selectedSection);
            _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"][key] = this.courses.map(function (course) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course, { students: course.students.map(function (student) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, student)); }) })); });
            // Refresh Core Course only (not loadCourses(), which would also reset
            // expandedElectiveCourseCodes/electiveCourses - a Core Course save must never touch
            // Elective Course's independent state) so the accordion, student table and counts all
            // reflect the persisted state.
            this.expandedCourseCodes.clear();
            this.courses = this.hydrateCourses(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ENROLLMENT_DATA"], key);
            this.enrollmentMessageType = 'success';
            this.enrollmentMessage = 'Enrollment updated successfully.';
            this.scheduleSuccessAutoDismiss();
        }
        catch (error) {
            this.enrollmentMessageType = 'danger';
            this.enrollmentMessage = error instanceof Error ? error.message : 'Failed to update enrollment. Please try again.';
        }
    };
    // Elective Course's own save, mirroring enrollStudents() above exactly but persisting to
    // ELECTIVE_ENROLLMENT_DATA/electiveCourses instead of ENROLLMENT_DATA/courses, so saving an
    // elective course's enrollment can never touch Core Course's data.
    CourseWiseEnrollmentComponent.prototype.enrollElectiveStudents = function () {
        try {
            if (!this.isSelectionComplete) {
                throw new Error('Select an Academic Year, Degree, Department, Semester and Section before enrolling.');
            }
            if (!this.electiveCourses || this.electiveCourses.length === 0) {
                throw new Error('There are no elective courses available to enroll students for this combination.');
            }
            var key = Object(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["buildEnrollmentKey"])(this.selectedYear, this.selectedDegree, this.selectedDepartment, this.selectedSemester, this.selectedSection);
            _mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"][key] = this.electiveCourses.map(function (course) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course, { students: course.students.map(function (student) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, student)); }) })); });
            // Refresh Elective Course only - see the matching comment in enrollStudents() above for
            // why this doesn't call the shared loadCourses().
            this.expandedElectiveCourseCodes.clear();
            this.electiveCourses = this.hydrateCourses(_mock_enrollment_data__WEBPACK_IMPORTED_MODULE_2__["ELECTIVE_ENROLLMENT_DATA"], key);
            this.enrollmentMessageType = 'success';
            this.enrollmentMessage = 'Enrollment updated successfully.';
            this.scheduleSuccessAutoDismiss();
        }
        catch (error) {
            this.enrollmentMessageType = 'danger';
            this.enrollmentMessage = error instanceof Error ? error.message : 'Failed to update enrollment. Please try again.';
        }
    };
    // Opens the Enrollment Confirmation modal for the given course. The modal itself is
    // shown by Bootstrap via the Save button's data-bs-toggle/data-bs-target attributes;
    // this just supplies which course's counts it should display. `list` defaults to 'core'
    // so every existing Core Course call site is unaffected.
    CourseWiseEnrollmentComponent.prototype.openSaveConfirmation = function (course, list) {
        if (list === void 0) { list = 'core'; }
        this.courseToSave = course;
        this.courseToSaveList = list;
    };
    // Modal's own Save action: performs the actual save, then clears courseToSave. The
    // modal closes itself via data-bs-dismiss="modal" on the same button.
    CourseWiseEnrollmentComponent.prototype.confirmEnrollment = function () {
        if (this.courseToSaveList === 'elective') {
            this.enrollElectiveStudents();
        }
        else {
            this.enrollStudents();
        }
        this.courseToSave = null;
    };
    // Auto-dismisses the success toast after a short delay: first fades it out by dropping
    // Bootstrap's `.show` class (the `.fade` class handles the opacity transition), then
    // removes it from the DOM once that transition has had time to finish. Any previously
    // scheduled dismiss is cancelled first, so back-to-back success messages each get their
    // own full delay rather than being cut short by an earlier timer.
    CourseWiseEnrollmentComponent.prototype.scheduleSuccessAutoDismiss = function () {
        var _this = this;
        clearTimeout(this.successAlertHideTimer);
        clearTimeout(this.successAlertRemoveTimer);
        this.successAlertVisible = true;
        this.successAlertHideTimer = setTimeout(function () {
            _this.successAlertVisible = false;
            _this.successAlertRemoveTimer = setTimeout(function () {
                _this.enrollmentMessage = null;
            }, 200);
        }, 4000);
    };
    CourseWiseEnrollmentComponent.prototype.selectElectiveCourseForUpload = function (course) {
        this.electiveCourseForUpload = course;
    };
    CourseWiseEnrollmentComponent.prototype.onUploadFileSelected = function (event) {
        var input = event.target;
        var file = input.files && input.files.length > 0 ? input.files[0] : null;
        this.uploadFile = file;
        this.uploadFileError = file && !this.isExcelFile(file)
            ? 'Please select a valid Excel file (.xlsx or .xls).'
            : null;
    };
    CourseWiseEnrollmentComponent.prototype.isExcelFile = function (file) {
        var name = file.name.toLowerCase();
        return name.endsWith('.xlsx') || name.endsWith('.xls');
    };
    // Generates and downloads a small CSV template named after the selected elective
    // course - there is no backend to fetch a real template from in this mock/local app.
    CourseWiseEnrollmentComponent.prototype.downloadElectiveTemplate = function () {
        if (!this.electiveCourseForUpload) {
            return;
        }
        var course = this.electiveCourseForUpload;
        var csvContent = 'Candidate ID,USN Number,Student Name\n';
        var blob = new Blob([csvContent], { type: 'text/csv' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = course.code + "-enrollment-template.csv";
        link.click();
        URL.revokeObjectURL(url);
    };
    // Accepts the selected file for the selected elective course. There is no backend/Excel
    // parser in this mock/local app to actually read student rows out of the file, so this
    // just confirms the upload using the real course and file the user picked - nothing here
    // is hardcoded, and no enrollment data is mutated by an upload.
    CourseWiseEnrollmentComponent.prototype.uploadElectiveFile = function () {
        if (!this.canUploadElectiveFile || !this.electiveCourseForUpload || !this.uploadFile) {
            return;
        }
        this.enrollmentMessageType = 'success';
        this.enrollmentMessage = "Uploaded \"" + this.uploadFile.name + "\" for " + this.electiveCourseForUpload.name + " (" + this.electiveCourseForUpload.code + ").";
        this.scheduleSuccessAutoDismiss();
        this.resetUploadModalState();
    };
    CourseWiseEnrollmentComponent.prototype.cancelUpload = function () {
        this.resetUploadModalState();
    };
    CourseWiseEnrollmentComponent.prototype.resetUploadModalState = function () {
        this.electiveCourseForUpload = null;
        this.uploadFile = null;
        this.uploadFileError = null;
    };
    CourseWiseEnrollmentComponent.prototype.trackByCourseCode = function (index, course) {
        return course.code;
    };
    CourseWiseEnrollmentComponent.prototype.trackByStudentId = function (index, student) {
        return student.id;
    };
    CourseWiseEnrollmentComponent.prototype.pagingMapFor = function (list) {
        return list === 'elective' ? this.electivePagingState : this.corePagingState;
    };
    CourseWiseEnrollmentComponent.prototype.getPagingState = function (course, list) {
        if (list === void 0) { list = 'core'; }
        var map = this.pagingMapFor(list);
        var state = map.get(course.code);
        if (!state) {
            state = { page: 1, pageSize: this.pageSizeOptions[0] };
            map.set(course.code, state);
        }
        return state;
    };
    // Changing the page size always jumps back to page 1, since whatever page the user was on
    // may no longer exist against the new page size.
    CourseWiseEnrollmentComponent.prototype.setPageSize = function (course, pageSize, list) {
        if (list === void 0) { list = 'core'; }
        var state = this.getPagingState(course, list);
        state.pageSize = pageSize;
        state.page = 1;
    };
    CourseWiseEnrollmentComponent.prototype.setPage = function (course, page, list) {
        if (list === void 0) { list = 'core'; }
        this.getPagingState(course, list).page = page;
    };
    // Computes everything a course's pagination controls, table rows and "Showing X to Y of Z"
    // summary need for the current page size, without ever touching or reordering
    // `course.students` itself - pagination (and, below, the global search's student-level
    // filtering) only ever select a subset to display.
    //
    // globalSearchText drives which students this course displays, same as the old per-course
    // table search used to: if the term matches this course's own name/code, every student still
    // shows (that part of global search is unchanged - matching the course is enough to show its
    // full roster); otherwise, if the course is only in the filtered list because one or more of
    // its students matched, only those matching students show here - never the whole roster for
    // a single matching student. Matching runs over the complete `course.students` list, not just
    // the current page, and pagination then applies on top of that filtered result.
    CourseWiseEnrollmentComponent.prototype.getPageInfo = function (course, list) {
        var _this = this;
        if (list === void 0) { list = 'core'; }
        var state = this.getPagingState(course, list);
        var term = this.globalSearchText.trim().toLowerCase();
        var studentsToDisplay = term && !this.courseMatchesByNameOrCode(course, term)
            ? course.students.filter(function (student) { return _this.studentMatchesGlobalSearch(student, term); })
            : course.students;
        var totalStudents = studentsToDisplay.length;
        var totalPages = Math.max(1, Math.ceil(totalStudents / state.pageSize));
        if (state.page > totalPages) {
            state.page = totalPages;
        }
        var currentPage = state.page;
        var startIndex = (currentPage - 1) * state.pageSize;
        var pagedStudents = studentsToDisplay.slice(startIndex, startIndex + state.pageSize);
        return {
            pageSize: state.pageSize,
            currentPage: currentPage,
            totalPages: totalPages,
            totalStudents: totalStudents,
            showingFrom: totalStudents === 0 ? 0 : startIndex + 1,
            showingTo: Math.min(startIndex + state.pageSize, totalStudents),
            startIndex: startIndex,
            pagedStudents: pagedStudents,
            pageNumbers: Array.from({ length: totalPages }, function (_, i) { return i + 1; })
        };
    };
    CourseWiseEnrollmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-wise-enrollment',
            template: __webpack_require__(/*! ./course-wise-enrollment.component.html */ "./src/app/course-wise-enrollment/course-wise-enrollment.component.html"),
            styles: [__webpack_require__(/*! ./course-wise-enrollment.component.css */ "./src/app/course-wise-enrollment/course-wise-enrollment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseWiseEnrollmentComponent);
    return CourseWiseEnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/course-wise-enrollment/mock-enrollment-data.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-wise-enrollment/mock-enrollment-data.ts ***!
  \****************************************************************/
/*! exports provided: ENROLLMENT_STATUSES, ACADEMIC_YEARS, buildEnrollmentKey, ENROLLMENT_DATA, ELECTIVE_ENROLLMENT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLLMENT_STATUSES", function() { return ENROLLMENT_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACADEMIC_YEARS", function() { return ACADEMIC_YEARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEnrollmentKey", function() { return buildEnrollmentKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLLMENT_DATA", function() { return ENROLLMENT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTIVE_ENROLLMENT_DATA", function() { return ELECTIVE_ENROLLMENT_DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Mock/local data source for the Course-wise Enrollment feature.
// No HTTP/backend calls are used - everything here is static, in-memory data.

var _a, _b;
var ENROLLMENT_STATUSES = ['Enrolled', 'Dropped', 'Pending'];
// Builds `count` sequential semester nodes ("Semester 1".."Semester N"), each offering
// the same set of sections. Used to keep the larger branches below concise.
function semesterRange(count, sections) {
    return Array.from({ length: count }, function (_, i) { return ({ name: "Semester " + (i + 1), sections: sections }); });
}
// Cascading dropdown source: Academic Year -> Degree -> Department -> Semester -> Section
//
// NOTE: The 2024-2025 branch's B.Tech > Computer Science path (degree list, department
// list, "Computer Science" semester list, and "Semester 1" sections) is asserted exactly
// by course-wise-enrollment.component.spec.ts and must not be reordered, renamed, or have
// siblings inserted/removed. Everything else here is free to grow.
var ACADEMIC_YEARS = [
    {
        year: '2022-2023',
        degrees: [
            {
                name: 'B.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Electronics & Communication', shortForm: 'EC', semesters: semesterRange(4, ['A']) }
                ]
            },
            {
                name: 'B.Sc',
                departments: [
                    { name: 'Physics', shortForm: 'PHY', semesters: semesterRange(6, ['A']) },
                    { name: 'Mathematics', shortForm: 'MATH', semesters: semesterRange(6, ['A']) }
                ]
            }
        ]
    },
    {
        year: '2023-2024',
        degrees: [
            {
                name: 'B.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(6, ['A', 'B', 'C']) },
                    { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(6, ['A', 'B']) },
                    { name: 'Civil', shortForm: 'CE', semesters: semesterRange(6, ['A']) }
                ]
            },
            {
                name: 'M.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) }
                ]
            },
            {
                name: 'MBA',
                departments: [
                    { name: 'Marketing', shortForm: 'MKT', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Finance', shortForm: 'FIN', semesters: semesterRange(4, ['A']) }
                ]
            }
        ]
    },
    {
        year: '2024-2025',
        degrees: [
            {
                name: 'B.Tech',
                departments: [
                    {
                        name: 'Computer Science',
                        shortForm: 'CS',
                        semesters: [
                            { name: 'Semester 1', sections: ['A', 'B'] },
                            { name: 'Semester 2', sections: ['A', 'B', 'C'] }
                        ]
                    },
                    {
                        name: 'Mechanical',
                        shortForm: 'ME',
                        semesters: [
                            { name: 'Semester 1', sections: ['A'] },
                            { name: 'Semester 2', sections: ['A', 'B'] }
                        ]
                    }
                ]
            },
            {
                name: 'M.Tech',
                departments: [
                    {
                        name: 'Computer Science',
                        shortForm: 'CS',
                        semesters: [
                            { name: 'Semester 1', sections: ['A'] },
                            { name: 'Semester 2', sections: ['A', 'B'] }
                        ]
                    },
                    { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(4, ['A']) }
                ]
            }
        ]
    },
    {
        year: '2025-2026',
        degrees: [
            {
                name: 'B.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(6, ['A', 'B', 'C']) },
                    { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(6, ['A', 'B']) },
                    { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Civil', shortForm: 'CE', semesters: semesterRange(4, ['A']) }
                ]
            },
            {
                name: 'M.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A']) }
                ]
            },
            {
                name: 'B.Sc',
                departments: [
                    { name: 'Computer Science', shortForm: 'BCS', semesters: semesterRange(6, ['A', 'B']) },
                    { name: 'Physics', shortForm: 'PHY', semesters: semesterRange(6, ['A']) }
                ]
            },
            {
                name: 'MBA',
                departments: [
                    { name: 'Marketing', shortForm: 'MKT', semesters: semesterRange(4, ['A', 'B']) },
                    { name: 'Finance', shortForm: 'FIN', semesters: semesterRange(4, ['A']) },
                    { name: 'Human Resources', shortForm: 'HR', semesters: semesterRange(4, ['A']) }
                ]
            }
        ]
    },
    {
        year: '2026-2027',
        degrees: [
            {
                name: 'B.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(2, ['A', 'B']) },
                    { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(2, ['A']) }
                ]
            },
            {
                name: 'M.Tech',
                departments: [
                    { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(2, ['A']) }
                ]
            }
        ]
    }
];
// Enrollment data keyed by the combination of all five selections.
// Key format: "<year>::<degree>::<department>::<semester>::<section>"
function buildEnrollmentKey(year, degree, department, semester, section) {
    return [year, degree, department, semester, section].join('::');
}
// Sequential id generator + small builders used only for the entries appended below
// the original hand-written ones, to keep the larger dataset readable.
var nextStudentId = 15;
function student(name, status, isBacklog) {
    if (isBacklog === void 0) { isBacklog = false; }
    var id = nextStudentId++;
    return { id: id, name: name, candidateId: "CAND" + (1000 + id), usn: "USN" + id.toString().padStart(4, '0'), status: status, isBacklog: isBacklog };
}
function course(code, name, students) {
    return { code: code, name: name, students: students };
}
// Raw, hand-curated seed data - kept exactly as originally written, including which course
// each student was first entered against and with what status. This is never read directly
// by the app; expandCoursesToSharedPopulation() below turns it into the actual exported
// ENROLLMENT_DATA, where every course for a given selection shares one common student
// population instead of each course only listing its own partial list.
var RAW_ENROLLMENT_DATA = (_a = {},
    // Multiple courses; one with multiple students, one with a couple, one with zero students.
    _a[buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        {
            code: 'CS101',
            name: 'Data Structures',
            students: [
                { id: 1, name: 'Aarav Sharma', candidateId: 'CAND1001', usn: 'USN0001', status: 'Enrolled' },
                { id: 2, name: 'Priya Nair', candidateId: 'CAND1002', usn: 'USN0002', status: 'Enrolled' },
                { id: 3, name: 'Rohan Gupta', candidateId: 'CAND1003', usn: 'USN0003', status: 'Dropped' },
                { id: 4, name: 'Sneha Iyer', candidateId: 'CAND1004', usn: 'USN0004', status: 'Pending' },
                { id: 5, name: 'Karan Mehta', candidateId: 'CAND1005', usn: 'USN0005', status: 'Enrolled' }
            ]
        },
        {
            code: 'CS102',
            name: 'Database Systems',
            students: [
                { id: 6, name: 'Ananya Rao', candidateId: 'CAND1006', usn: 'USN0006', status: 'Enrolled' },
                { id: 7, name: 'Vikram Singh', candidateId: 'CAND1007', usn: 'USN0007', status: 'Pending' },
                student('Tanya Bhatt', 'Enrolled'),
                // Same person as CS101's Aarav Sharma - enrolled in both courses this semester.
                { id: 900, name: 'Aarav Sharma', candidateId: 'CAND1001', usn: 'USN0001', status: 'Enrolled' },
                student('Nitya Kulkarni', 'Enrolled'),
                student('Rehaan Shah', 'Pending'),
                student('Kiara Bhagat', 'Enrolled'),
                student('Arushi Bedi', 'Enrolled'),
                student('Yug Thakkar', 'Dropped'),
                student('Ishaani Kapoor', 'Pending'),
                student('Devansh Malviya', 'Enrolled')
            ]
        },
        {
            code: 'CS103',
            name: 'Operating Systems',
            students: [],
            // Explicitly marked rejected so the accordion header's delete/trash icon has at
            // least one course to demonstrate against - isCourseRejected() reads this flag
            // directly rather than deriving it from student data.
            isRejected: true
        },
        course('CS104', 'Computer Architecture', [
            student('Advika Menon', 'Enrolled'),
            student('Kartik Suri', 'Enrolled'),
            student('Palak Trivedi', 'Dropped'),
            student('Yashraj Bhalla', 'Pending'),
            student('Mannat Chadha', 'Enrolled'),
            student('Sarthak Bajwa', 'Enrolled'),
            student('Kyra Dalal', 'Pending'),
            student('Rian Fernandes', 'Dropped'),
            student('Niyati Salvi', 'Enrolled')
        ]),
        course('CS105', 'Discrete Mathematics', [
            student('Ojasvi Kohli', 'Enrolled'),
            student('Dhruv Malhotra', 'Enrolled'),
            student('Anaya Sinha', 'Pending'),
            student('Veer Ahluwalia', 'Enrolled'),
            student('Prisha Kamdar', 'Enrolled'),
            student('Aditya Wagh', 'Dropped'),
            student('Kashvi Bhalla', 'Pending'),
            student('Reyansh Save', 'Enrolled')
        ])
    ],
    // Valid combination with no courses defined yet.
    _a[buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'B')] = [],
    _a[buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 2', 'A')] = [
        {
            code: 'CS201',
            name: 'Algorithms',
            students: [
                { id: 8, name: 'Ishaan Kapoor', candidateId: 'CAND1008', usn: 'USN0008', status: 'Enrolled' },
                student('Rakesh Iyer', 'Pending'),
                // Same person as CS101's Priya Nair (Semester 1) - also enrolled in this Semester 2 course.
                { id: 901, name: 'Priya Nair', candidateId: 'CAND1002', usn: 'USN0002', status: 'Enrolled' },
                // Same person as CS202's Tarun Bajaj (Semester 2, Section C) - also enrolled in this course.
                { id: 904, name: 'Tarun Bajaj', candidateId: 'CAND2001', usn: 'USN2001', status: 'Enrolled' },
                student('Chirayu Deshpande', 'Enrolled'),
                student('Aahana Pillai', 'Pending'),
                student('Yuvraj Kohli', 'Enrolled'),
                student('Samaira Dutt', 'Enrolled'),
                student('Vihaan Raina', 'Dropped'),
                student('Tara Bhasin', 'Pending')
            ]
        },
        course('CS203', 'Operating Systems Lab', [
            student('Naman Chhabra', 'Enrolled'),
            student('Ishika Vora', 'Enrolled'),
            student('Rutuja Nair', 'Dropped'),
            student('Deepansh Rawat', 'Pending'),
            student('Aviral Sinha', 'Enrolled'),
            student('Myra Kohli', 'Enrolled'),
            student('Kabir Anand', 'Pending')
        ]),
        course('CS205', 'Computer Graphics', [
            student('Anvesha Pillai', 'Enrolled'),
            student('Ronit Bhagat', 'Enrolled'),
            student('Tvisha Sarin', 'Pending'),
            student('Yuvaan Chadha', 'Dropped'),
            student('Diya Wadhwani', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'B.Tech', 'Mechanical', 'Semester 1', 'A')] = [
        {
            code: 'ME101',
            name: 'Thermodynamics',
            students: [
                { id: 9, name: 'Divya Menon', candidateId: 'CAND1009', usn: 'USN0009', status: 'Enrolled' },
                { id: 10, name: 'Arjun Reddy', candidateId: 'CAND1010', usn: 'USN0010', status: 'Dropped' },
                student('Ojas Kulkarni', 'Enrolled'),
                student('Anvika Save', 'Enrolled'),
                student('Harshil Doshi', 'Pending'),
                student('Ishanvi Rege', 'Dropped')
            ]
        },
        {
            code: 'ME102',
            name: 'Fluid Mechanics',
            students: [
                student('Ritvik Nambiar', 'Pending'),
                // Same person as ME101's Divya Menon - also enrolled in this course.
                { id: 905, name: 'Divya Menon', candidateId: 'CAND1009', usn: 'USN0009', status: 'Enrolled' },
                student('Kavish Rao', 'Enrolled'),
                student('Tanish Bhide', 'Enrolled'),
                student('Ruhani Sarna', 'Pending')
            ]
        },
        course('ME103', 'Manufacturing Processes', [
            student('Yashvardhan Pandit', 'Enrolled'),
            student('Avantika Phadke', 'Enrolled'),
            student('Kian Vaidya', 'Pending'),
            student('Riddhima Pai', 'Dropped')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'M.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        {
            code: 'CS501',
            name: 'Advanced Algorithms',
            students: [
                { id: 11, name: 'Neha Joshi', candidateId: 'CAND1011', usn: 'USN0011', status: 'Enrolled' },
                { id: 12, name: 'Aditya Verma', candidateId: 'CAND1012', usn: 'USN0012', status: 'Enrolled' },
                { id: 13, name: 'Meera Pillai', candidateId: 'CAND1013', usn: 'USN0013', status: 'Pending' },
                student('Anushka Rao', 'Enrolled'),
                student('Ishaan Bhagwat', 'Enrolled'),
                student('Charvi Tandon', 'Dropped')
            ]
        },
        course('CS502', 'Computer Vision', [
            student('Reyansh Sarkar', 'Enrolled'),
            student('Aadya Chatterjee', 'Enrolled'),
            student('Vihaan Mitra', 'Pending'),
            student('Sanaya Dey', 'Dropped')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        {
            code: 'CS101',
            name: 'Data Structures',
            students: [
                { id: 14, name: 'Yash Patel', candidateId: 'CAND1014', usn: 'USN0014', status: 'Enrolled' },
                student('Devika Pillai', 'Pending'),
                student('Ridhima Sinha', 'Enrolled'),
                student('Arnav Shroff', 'Enrolled'),
                student('Ivana Khosla', 'Dropped')
            ]
        },
        course('CS102', 'Database Systems', [
            student('Kabir Talwar', 'Enrolled'),
            student('Anaisha Buch', 'Enrolled'),
            student('Dhruv Chatterjee', 'Pending')
        ])
    ],
    // Note: "2024-2025::B.Tech::Computer Science::Semester 2::B" is intentionally
    // absent from this map to demonstrate the "no data at all" edge case.
    // --- Additional combinations across the wider set of years/degrees/departments ---
    _a[buildEnrollmentKey('2022-2023', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS101', 'Introduction to Programming', [
            // Same person as CS102's Zoya Khan below - enrolled in both courses this semester.
            { id: 910, name: 'Zoya Khan', candidateId: 'CAND2003', usn: 'USN2003', status: 'Enrolled' },
            student('Imran Qureshi', 'Enrolled'),
            // Dropped but a backlog student, so the strike-through styling should not apply.
            student('Naina Chopra', 'Dropped', true),
            student('Siddhi Kamath', 'Enrolled'),
            student('Aarohi Lulla', 'Enrolled'),
            student('Kabir Sachdeva', 'Pending'),
            student('Myra Bhalla', 'Dropped')
        ]),
        course('CS102', 'Discrete Mathematics', [
            student('Rahul Verma', 'Pending'),
            student('Manish Tiwari', 'Enrolled'),
            { id: 911, name: 'Zoya Khan', candidateId: 'CAND2003', usn: 'USN2003', status: 'Enrolled' },
            student('Ridhi Oberoi', 'Enrolled'),
            student('Shaurya Dev', 'Pending'),
            student('Ananya Trehan', 'Enrolled')
        ]),
        {
            code: 'CS103',
            name: 'Computer Fundamentals',
            students: [
                student('Yashika Grover', 'Enrolled'),
                student('Advait Bhalerao', 'Enrolled'),
                student('Prisha Madan', 'Pending'),
                student('Rehan Vora', 'Dropped')
            ],
            // Explicitly marked rejected so this selection's accordion header also has a
            // course to demonstrate the delete/trash icon against - isCourseRejected() reads
            // this flag directly rather than deriving it from student data (see the same
            // pattern on 2024-2025::B.Tech::Computer Science::Semester 1::A's CS103 above).
            isRejected: true
        }
    ],
    // Valid combination with no courses defined yet (repeated edge case in a new branch).
    _a[buildEnrollmentKey('2022-2023', 'B.Tech', 'Computer Science', 'Semester 1', 'B')] = [],
    _a[buildEnrollmentKey('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A')] = [
        course('PHY101', 'Classical Mechanics', [
            // Same person as PHY102's Devansh Rao below - enrolled in both courses this semester.
            { id: 912, name: 'Devansh Rao', candidateId: 'CAND2004', usn: 'USN2004', status: 'Enrolled' },
            student('Kavya Krishnan', 'Enrolled'),
            student('Tanvi Shah', 'Dropped'),
            student('Om Prakash', 'Pending'),
            student('Rhea Vora', 'Enrolled')
        ]),
        course('PHY102', 'Electromagnetism', [
            student('Kabir Malhotra', 'Pending'),
            { id: 913, name: 'Devansh Rao', candidateId: 'CAND2004', usn: 'USN2004', status: 'Enrolled' },
            student('Ananya Bhatt', 'Pending'),
            student('Vedaant Kulkarni', 'Enrolled'),
            student('Saisha Rane', 'Enrolled'),
            student('Arjun Deshpande', 'Dropped')
        ]),
        course('PHY103', 'Thermal Physics', [
            student('Ishita Phatak', 'Enrolled'),
            student('Kartikeya Pant', 'Enrolled'),
            student('Naysa Gokhale', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2023-2024', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS101', 'Data Structures', [
            // Same person as CS110's Aisha Malhotra below - enrolled in both courses this semester.
            { id: 914, name: 'Aisha Malhotra', candidateId: 'CAND2005', usn: 'USN2005', status: 'Enrolled' },
            student('Dev Anand', 'Enrolled'),
            student('Riya Kulkarni', 'Enrolled'),
            student('Sameer Khanna', 'Dropped'),
            student('Ansh Trivedi', 'Enrolled'),
            student('Kiara Nanda', 'Enrolled'),
            student('Aryan Dhillon', 'Pending'),
            student('Vanya Bhasin', 'Dropped')
        ]),
        course('CS102', 'Database Systems', [
            student('Pooja Bhatt', 'Pending'),
            student('Nikhil Saxena', 'Enrolled'),
            student('Nandini Rathi', 'Enrolled'),
            student('Rudra Sabharwal', 'Enrolled'),
            student('Aisha Tandon', 'Pending'),
            student('Veer Chopra', 'Dropped')
        ]),
        course('CS110', 'Web Development Basics', [
            student('Alok Mishra', 'Enrolled'),
            { id: 915, name: 'Aisha Malhotra', candidateId: 'CAND2005', usn: 'USN2005', status: 'Enrolled' },
            student('Pranav Acharya', 'Pending'),
            student('Ishaani Grewal', 'Enrolled'),
            student('Yuvan Sethi', 'Enrolled')
        ])
    ],
    // Course with zero students in a new branch.
    _a[buildEnrollmentKey('2023-2024', 'B.Tech', 'Computer Science', 'Semester 1', 'C')] = [
        course('CS120', 'Computer Ethics', [])
    ],
    _a[buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS510', 'Machine Learning', [
            // Same person as CS520's Harshita Rane below - enrolled in both courses this semester.
            { id: 916, name: 'Harshita Rane', candidateId: 'CAND2006', usn: 'USN2006', status: 'Enrolled' },
            student('Varun Kapoor', 'Enrolled'),
            student('Ishani Bhatt', 'Pending'),
            student('Rudransh Sinha', 'Enrolled'),
            student('Kavya Bhagat', 'Dropped')
        ]),
        course('CS520', 'Distributed Systems', [
            student('Simran Gill', 'Pending'),
            { id: 917, name: 'Harshita Rane', candidateId: 'CAND2006', usn: 'USN2006', status: 'Enrolled' },
            student('Aryan Kohli', 'Enrolled'),
            student('Naira Dsouza', 'Enrolled'),
            student('Yash Bora', 'Pending')
        ]),
        course('CS530', 'Natural Language Processing', [
            student('Advait Rane', 'Enrolled'),
            student('Ishita Kohli', 'Enrolled'),
            student('Karthik Iyer', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2023-2024', 'MBA', 'Marketing', 'Semester 1', 'A')] = [
        course('MKT101', 'Principles of Marketing', [
            // Same person as MKT102's Ritika Bose below - enrolled in both courses this semester.
            { id: 918, name: 'Ritika Bose', candidateId: 'CAND2007', usn: 'USN2007', status: 'Enrolled' },
            student('Farhan Ali', 'Enrolled'),
            student('Kabir Sen', 'Enrolled'),
            student('Ishita Dutta', 'Dropped'),
            student('Manav Joshi', 'Pending'),
            student('Preeti Nambiar', 'Enrolled'),
            student('Mira Sinha', 'Enrolled'),
            student('Devansh Kapadia', 'Enrolled'),
            student('Anaya Shroff', 'Pending')
        ]),
        course('MKT102', 'Consumer Behavior', [
            student('Yashvi Doshi', 'Pending'),
            { id: 919, name: 'Ritika Bose', candidateId: 'CAND2007', usn: 'USN2007', status: 'Enrolled' },
            student('Rehan Qureshi', 'Enrolled'),
            student('Kiara Wagh', 'Enrolled'),
            student('Samarth Bakshi', 'Dropped')
        ]),
        course('MKT103', 'Sales Management', [
            student('Trisha Kapadia', 'Enrolled'),
            student('Arnav Solanki', 'Enrolled'),
            student('Pihu Sarin', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 2', 'C')] = [
        course('CS202', 'Computer Networks', [
            // Same person as CS201's Tarun Bajaj (Semester 2, Section A) - also enrolled in that course.
            { id: 903, name: 'Tarun Bajaj', candidateId: 'CAND2001', usn: 'USN2001', status: 'Enrolled' },
            student('Nisha Pawar', 'Dropped'),
            student('Laksh Bafna', 'Enrolled'),
            student('Vedika Rane', 'Enrolled'),
            student('Aryan Mistry', 'Pending'),
            student('Ekansh Bali', 'Enrolled'),
            student('Ridhima Sabharwal', 'Enrolled'),
            student('Kian Dsilva', 'Pending')
        ]),
        course('CS204', 'Software Engineering', [
            student('Tanmay Bhalerao', 'Enrolled'),
            student('Sanjana Iyer', 'Enrolled'),
            student('Harshit Kapoor', 'Pending'),
            student('Riddhi Kamat', 'Enrolled'),
            student('Aditya Sabnis', 'Enrolled'),
            student('Navya Ranganathan', 'Dropped')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'M.Tech', 'Computer Science', 'Semester 2', 'A')] = [
        {
            code: 'CS530',
            name: 'Cloud Computing',
            students: [
                student('Gaurav Thakur', 'Enrolled'),
                student('Shreya Ghosh', 'Pending'),
                // Same person as CS501's Neha Joshi (Semester 1) - also enrolled in this Semester 2 course.
                { id: 902, name: 'Neha Joshi', candidateId: 'CAND1011', usn: 'USN0011', status: 'Enrolled' },
                // Same person as CS501's Aditya Verma (Semester 1) - also enrolled in this Semester 2 course.
                { id: 906, name: 'Aditya Verma', candidateId: 'CAND1012', usn: 'USN0012', status: 'Enrolled' },
                student('Riya Bhagwat', 'Enrolled'),
                student('Aarav Dandekar', 'Dropped')
            ]
        },
        course('CS531', 'Big Data Analytics', [
            student('Ishan Kelkar', 'Enrolled'),
            student('Mahi Purohit', 'Enrolled'),
            student('Yuvraj Sane', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'M.Tech', 'Electrical', 'Semester 1', 'A')] = [
        course('EE501', 'Power Systems', [
            // Same person as EE502's Anjali Deshmukh below - enrolled in both courses this semester.
            { id: 907, name: 'Anjali Deshmukh', candidateId: 'CAND2002', usn: 'USN2002', status: 'Enrolled' },
            student('Radhika Menon', 'Pending'),
            student('Ishaan Verma', 'Enrolled'),
            student('Tanvi Ghosh', 'Enrolled'),
            student('Rian Kapadia', 'Dropped')
        ]),
        course('EE502', 'Control Systems', [
            student('Veer Chandel', 'Enrolled'),
            { id: 908, name: 'Anjali Deshmukh', candidateId: 'CAND2002', usn: 'USN2002', status: 'Enrolled' },
            student('Meher Chawla', 'Pending'),
            student('Aanya Rout', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 2', 'A')] = [
        course('CS201', 'Algorithms', [
            student('Rohit Chawla', 'Enrolled'),
            student('Megha Suri', 'Enrolled'),
            student('Aman Kohli', 'Dropped'),
            student('Samaira Joshi', 'Enrolled'),
            // Same person as this group's CS101 (Semester 1) Yash Patel - also enrolled in this course.
            { id: 909, name: 'Yash Patel', candidateId: 'CAND1014', usn: 'USN0014', status: 'Enrolled' },
            student('Kiara Solanki', 'Enrolled'),
            student('Dhruv Ranganathan', 'Pending')
        ]),
        course('CS202', 'Computer Networks', [
            student('Anvi Bhagwat', 'Enrolled'),
            student('Rehan Dsouza', 'Enrolled'),
            student('Ishani Wagh', 'Pending')
        ])
    ],
    // Valid combination with no courses defined yet.
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 2', 'B')] = [],
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Mechanical', 'Semester 1', 'A')] = [
        course('ME101', 'Thermodynamics', [
            // Same person as ME102's Sahil Arora below - enrolled in both courses this semester.
            { id: 920, name: 'Sahil Arora', candidateId: 'CAND2008', usn: 'USN2008', status: 'Enrolled' },
            student('Pallavi Menon', 'Enrolled'),
            student('Chirag Dave', 'Pending'),
            student('Ishaani Bhide', 'Enrolled'),
            student('Aarav Ranade', 'Dropped')
        ]),
        course('ME102', 'Fluid Mechanics', [
            student('Yuvraj Solanki', 'Pending'),
            { id: 921, name: 'Sahil Arora', candidateId: 'CAND2008', usn: 'USN2008', status: 'Enrolled' },
            student('Tara Kapoor', 'Enrolled'),
            student('Nivedita Pai', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'M.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS501', 'Advanced Algorithms', [
            // Same person as CS502's Diya Kapadia below - enrolled in both courses this semester.
            { id: 922, name: 'Diya Kapadia', candidateId: 'CAND2009', usn: 'USN2009', status: 'Enrolled' },
            student('Arnav Bhatia', 'Enrolled'),
            student('Tanisha Roy', 'Pending'),
            student('Ojas Chatterjee', 'Enrolled'),
            student('Riya Basu', 'Dropped')
        ]),
        course('CS502', 'Cloud Infrastructure', [
            student('Aadhya Bhargava', 'Enrolled'),
            { id: 923, name: 'Diya Kapadia', candidateId: 'CAND2009', usn: 'USN2009', status: 'Enrolled' },
            student('Ronit Saxena', 'Pending'),
            student('Kabir Banerjee', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Sc', 'Computer Science', 'Semester 1', 'A')] = [
        course('BCS101', 'Fundamentals of Computing', [
            // Same person as BCS102's Kiara D'Souza below - enrolled in both courses this semester.
            { id: 924, name: 'Kiara D\'Souza', candidateId: 'CAND2010', usn: 'USN2010', status: 'Enrolled' },
            student('Lakshay Grover', 'Dropped'),
            student('Aparna Iyer', 'Pending'),
            student('Nakul Sethi', 'Enrolled'),
            student('Ridhima Vora', 'Enrolled'),
            student('Yashraj Pant', 'Pending')
        ]),
        course('BCS102', 'Data Analytics Basics', [
            student('Ojasvi Rana', 'Pending'),
            { id: 925, name: 'Kiara D\'Souza', candidateId: 'CAND2010', usn: 'USN2010', status: 'Enrolled' },
            student('Ishita Rane', 'Enrolled'),
            student('Vedant Kelkar', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A')] = [
        course('MKT101', 'Principles of Marketing', [
            // Same person as MKT102's Rhea Kohli below - enrolled in both courses this semester.
            { id: 926, name: 'Rhea Kohli', candidateId: 'CAND2011', usn: 'USN2011', status: 'Enrolled' },
            student('Siddharth Rao', 'Enrolled'),
            student('Ayesha Siddiqui', 'Enrolled'),
            student('Vivaan Malhotra', 'Enrolled'),
            student('Trisha Banerjee', 'Dropped'),
            student('Kunal Oberoi', 'Pending'),
            student('Aditi Ranganathan', 'Enrolled'),
            student('Rajveer Chauhan', 'Pending')
        ]),
        course('MKT102', 'Digital Marketing', [
            student('Ishaan Dutta', 'Enrolled'),
            { id: 927, name: 'Rhea Kohli', candidateId: 'CAND2011', usn: 'USN2011', status: 'Enrolled' },
            student('Devansh Oberoi', 'Enrolled'),
            student('Anushka Menezes', 'Pending')
        ]),
        course('MKT103', 'Brand Management', [
            student('Karan Suri', 'Enrolled'),
            student('Naina Kapadia', 'Enrolled'),
            student('Rehaan Bhagat', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'MBA', 'Finance', 'Semester 1', 'A')] = [
        course('FIN101', 'Financial Accounting', [
            // Same person as FIN102's Mihika Sethi below - enrolled in both courses this semester.
            { id: 928, name: 'Mihika Sethi', candidateId: 'CAND2012', usn: 'USN2012', status: 'Enrolled' },
            student('Kritika Save', 'Pending'),
            student('Kiaan Mehta', 'Pending'),
            student('Arnav Ghatak', 'Enrolled'),
            student('Ishika Rout', 'Dropped')
        ]),
        course('FIN102', 'Corporate Finance', [
            student('Rudra Pandey', 'Enrolled'),
            { id: 929, name: 'Mihika Sethi', candidateId: 'CAND2012', usn: 'USN2012', status: 'Enrolled' },
            student('Aanya Ghosh', 'Enrolled'),
            student('Veer Kapadia', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2026-2027', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS101', 'Data Structures', [
            // Same person as CS102's Advait Krishnan below - enrolled in both courses this semester.
            { id: 930, name: 'Advait Krishnan', candidateId: 'CAND2013', usn: 'USN2013', status: 'Enrolled' },
            student('Sara Fernandes', 'Enrolled'),
            student('Vihaan Rathore', 'Pending'),
            student('Meher Bhide', 'Enrolled'),
            student('Aryaman Dutt', 'Dropped')
        ]),
        course('CS102', 'Database Systems', [
            student('Avani Shroff', 'Enrolled'),
            { id: 931, name: 'Advait Krishnan', candidateId: 'CAND2013', usn: 'USN2013', status: 'Enrolled' },
            student('Reyaan Shetty', 'Pending'),
            student('Ishanvi Kohli', 'Enrolled')
        ])
    ],
    _a[buildEnrollmentKey('2026-2027', 'M.Tech', 'Computer Science', 'Semester 1', 'A')] = [
        course('CS501', 'Advanced Algorithms', [
            // Same person as CS502's Ira Chandran below - enrolled in both courses this semester.
            { id: 932, name: 'Ira Chandran', candidateId: 'CAND2014', usn: 'USN2014', status: 'Enrolled' },
            student('Reyansh Puri', 'Dropped'),
            student('Vanya Kohli', 'Enrolled'),
            student('Om Bhargava', 'Enrolled'),
            student('Shanaya Dey', 'Pending')
        ]),
        course('CS502', 'Advanced Algorithms II', [
            student('Ojas Bhargava', 'Enrolled'),
            { id: 933, name: 'Ira Chandran', candidateId: 'CAND2014', usn: 'USN2014', status: 'Enrolled' },
            student('Arjun Bafna', 'Pending'),
            student('Trisha Kelkar', 'Enrolled')
        ])
    ],
    // --- Previously-uncovered degree/department combinations, now populated so every
    // branch of the dropdown tree has real course/student data to explore. ---
    _a[buildEnrollmentKey('2022-2023', 'B.Tech', 'Electronics & Communication', 'Semester 1', 'A')] = [
        course('EC101', 'Circuit Theory', [
            student('Yuvan Desai', 'Enrolled'),
            student('Anika Pillai', 'Enrolled'),
            student('Kabir Nair', 'Dropped'),
            student('Saanvi Rao', 'Pending'),
            student('Ritvik Chandra', 'Enrolled'),
            student('Manha Sethi', 'Enrolled')
        ]),
        course('EC102', 'Digital Electronics', [
            student('Aarush Bindra', 'Enrolled'),
            student('Ira Vaswani', 'Pending'),
            student('Nirvaan Chopra', 'Dropped')
        ])
    ],
    _a[buildEnrollmentKey('2022-2023', 'B.Sc', 'Mathematics', 'Semester 1', 'A')] = [
        course('MATH101', 'Calculus I', [
            student('Ojas Mehta', 'Enrolled'),
            student('Diya Kulkarni', 'Enrolled'),
            student('Farhan Sheikh', 'Pending'),
            student('Naisha Gupta', 'Enrolled'),
            student('Kabir Rastogi', 'Enrolled'),
            student('Avni Sachdev', 'Dropped')
        ]),
        course('MATH102', 'Linear Algebra', [
            student('Ishaan Pradhan', 'Enrolled'),
            student('Riya Chowdhury', 'Enrolled'),
            student('Veer Nanda', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2023-2024', 'B.Tech', 'Civil', 'Semester 1', 'A')] = [
        course('CE101', 'Surveying', [
            student('Aryan Malhotra', 'Enrolled'),
            student('Ishita Verma', 'Enrolled'),
            student('Devraj Singh', 'Dropped'),
            student('Kavya Shroff', 'Enrolled'),
            student('Aarav Bhalla', 'Pending')
        ]),
        course('CE102', 'Concrete Technology', [
            student('Naman Rege', 'Enrolled'),
            student('Diya Anand', 'Enrolled'),
            student('Yuvraj Sarin', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2024-2025', 'M.Tech', 'Mechanical', 'Semester 1', 'A')] = [
        course('ME510', 'Advanced Thermodynamics', [
            student('Kritika Joshi', 'Enrolled'),
            student('Rohan Desai', 'Pending'),
            student('Ananya Sharma', 'Enrolled'),
            student('Arjun Pillai', 'Enrolled'),
            student('Tanya Rout', 'Dropped')
        ]),
        course('ME511', 'Finite Element Analysis', [
            student('Ishaan Kapadia', 'Enrolled'),
            student('Myra Sinha', 'Enrolled'),
            student('Kabir Rane', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Electrical', 'Semester 1', 'A')] = [
        course('EE101', 'Circuit Analysis', [
            student('Vivaan Kapoor', 'Enrolled'),
            student('Myra Iyer', 'Enrolled'),
            student('Aditya Rathi', 'Dropped'),
            student('Kyra Nambiar', 'Pending'),
            student('Reyansh Chandra', 'Enrolled'),
            student('Aadhya Ranade', 'Enrolled')
        ]),
        course('EE102', 'Digital Signal Processing', [
            student('Kabir Solanki', 'Enrolled'),
            student('Navya Bhide', 'Pending'),
            student('Yuvaan Save', 'Dropped')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Tech', 'Civil', 'Semester 1', 'A')] = [
        course('CE101', 'Structural Engineering', [
            student('Reyansh Gupta', 'Enrolled'),
            student('Anvi Chauhan', 'Enrolled'),
            student('Sameer Bose', 'Pending'),
            student('Ishita Kapadia', 'Enrolled'),
            student('Vihaan Nanda', 'Dropped')
        ]),
        course('CE102', 'Geotechnical Engineering', [
            student('Aarohi Menon', 'Enrolled'),
            student('Kartikeya Ghosh', 'Enrolled'),
            student('Sanaya Bhalla', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'M.Tech', 'Electrical', 'Semester 1', 'A')] = [
        course('EE510', 'Power Electronics', [
            student('Ishani Kapadia', 'Enrolled'),
            student('Aarav Thakur', 'Enrolled'),
            student('Tanish Grover', 'Dropped'),
            student('Riya Sabharwal', 'Enrolled'),
            student('Om Deshpande', 'Pending')
        ]),
        course('EE511', 'Renewable Energy Systems', [
            student('Anaya Kelkar', 'Enrolled'),
            student('Dhruv Sane', 'Enrolled'),
            student('Ishaani Purohit', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'B.Sc', 'Physics', 'Semester 1', 'A')] = [
        course('PHY101', 'Mechanics', [
            student('Riya Sen', 'Enrolled'),
            student('Aryan Chandel', 'Pending'),
            student('Navya Rao', 'Enrolled'),
            student('Kabir Dutta', 'Enrolled'),
            student('Ishita Wadhwa', 'Enrolled'),
            student('Veer Kohli', 'Dropped')
        ]),
        course('PHY102', 'Optics', [
            student('Anvika Rout', 'Enrolled'),
            student('Reyansh Bhagat', 'Enrolled'),
            student('Kiara Sane', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2025-2026', 'MBA', 'Human Resources', 'Semester 1', 'A')] = [
        course('HR101', 'Organizational Behavior', [
            student('Simran Kohli', 'Enrolled'),
            student('Yash Malhotra', 'Enrolled'),
            student('Priyanka Shroff', 'Pending'),
            student('Nikhil Bhargava', 'Dropped'),
            student('Aditi Ranade', 'Enrolled'),
            student('Karthik Sabnis', 'Pending')
        ]),
        course('HR102', 'Talent Acquisition', [
            student('Anushka Rout', 'Enrolled'),
            student('Rehan Kapadia', 'Enrolled'),
            student('Ishaani Dev', 'Pending')
        ])
    ],
    _a[buildEnrollmentKey('2026-2027', 'B.Tech', 'Mechanical', 'Semester 1', 'A')] = [
        course('ME101', 'Engineering Mechanics', [
            student('Aditi Sethi', 'Enrolled'),
            student('Rudransh Verma', 'Enrolled'),
            student('Ishaan Oberoi', 'Pending'),
            student('Myra Chatterjee', 'Enrolled'),
            student('Kabir Ranganathan', 'Dropped')
        ]),
        course('ME102', 'Machine Design', [
            student('Naina Bhagwat', 'Enrolled'),
            student('Arjun Save', 'Enrolled'),
            student('Ridhima Sarna', 'Pending')
        ])
    ]
// "2026-2027::B.Tech::Computer Science::Semester 2::A" and several other reachable
// combinations are intentionally left without an entry, so the "no data at all"
// case stays easy to hit while exploring the wider dropdown tree.
,
    _a);
// Turns RAW_ENROLLMENT_DATA into the actual exported map: for each Degree+Department+
// Semester+Section key, every course that originally had at least one student is expanded
// to the FULL shared population for that key (every distinct student - by candidateId -
// across all of that key's courses), while each course keeps its own independent status per
// student (the status it originally had there, or 'Pending' for a population member who
// wasn't originally part of that specific course). A course seeded with zero students (e.g.
// the deliberate "no students enrolled" demo courses) is left untouched, since it was never
// meant to show real students in the first place.
//
// totalStudentsForDegreeAndDepartment (see the component) already dedupes by candidateId
// across `courses`, so giving every course the same population doesn't inflate that total -
// it only ever counts each distinct student once, exactly as before.
function buildPopulation(courses) {
    var population = [];
    var seenCandidateIds = new Set();
    courses.forEach(function (course) {
        course.students.forEach(function (student) {
            if (!seenCandidateIds.has(student.candidateId)) {
                seenCandidateIds.add(student.candidateId);
                population.push({ id: student.id, name: student.name, candidateId: student.candidateId, usn: student.usn, status: student.status });
            }
        });
    });
    return population;
}
function expandCourseToPopulation(course, population) {
    var originalByCandidateId = new Map();
    course.students.forEach(function (student) { return originalByCandidateId.set(student.candidateId, student); });
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course, { students: population.map(function (member) {
            var original = originalByCandidateId.get(member.candidateId);
            return {
                id: member.id,
                name: member.name,
                candidateId: member.candidateId,
                usn: member.usn,
                status: original ? original.status : 'Pending',
                isRejected: original ? original.isRejected : undefined,
                isBacklog: original ? original.isBacklog : undefined
            };
        }) });
}
function expandCoursesToSharedPopulation(data) {
    var result = {};
    Object.keys(data).forEach(function (key) {
        var courses = data[key];
        var population = buildPopulation(courses);
        result[key] = courses.map(function (course) { return course.students.length > 0 ? expandCourseToPopulation(course, population) : course; });
    });
    return result;
}
var ENROLLMENT_DATA = expandCoursesToSharedPopulation(RAW_ENROLLMENT_DATA);
// --- Elective Course mock data ---
//
// Kept as its own map (same buildEnrollmentKey convention as ENROLLMENT_DATA above) rather
// than merged into ENROLLMENT_DATA's course lists, for two reasons: it lets a future Elective
// Course UI read this independently of Core Course, and it keeps ENROLLMENT_DATA - and
// therefore CourseWiseEnrollmentComponent.totalStudentsForDegreeAndDepartment, which sums
// unique candidateIds across `this.courses` (sourced only from ENROLLMENT_DATA) - completely
// unaffected by adding electives. No total is computed here at all; there is nothing for an
// elective entry to double-count or omit.
//
// Only a few Degree+Department combinations get elective data (not every branch), and every
// elective student is looked up from that same key's *existing* ENROLLMENT_DATA entry via
// findCoreStudent() rather than hand-copied, so it is structurally impossible for an elective
// roster to drift from "the exact same students already associated with that selection" -
// the same person can then appear under both Core Course and Elective Course, with their own
// independent status per course, matching how the existing core data already lets one person
// appear in two different core courses (e.g. CS101/CS102's Aarav Sharma above).
// Separate id range from the `student()` helper's counter above, so ids assigned here can
// never collide with a core-course student id (ids are only ever compared within a single
// course's own list for Angular's trackBy, but keeping the ranges apart avoids any doubt).
var nextElectiveStudentId = 5000;
// Reuses an existing core-course student's identity (name/candidateId/usn - candidateId is
// what totalStudentsForDegreeAndDepartment dedupes on) for an elective-course entry, with its
// own id and its own independent enrollment status for this elective, exactly like the
// existing "same person, different course" pattern used throughout ENROLLMENT_DATA above.
function electiveStudent(source, status) {
    var id = nextElectiveStudentId++;
    return { id: id, name: source.name, candidateId: source.candidateId, usn: source.usn, status: status };
}
// Looks up a student by name within the given key's *core* course data, so elective rosters
// are always built from students who are genuinely already part of that Degree+Department+
// Semester+Section's Core Course population - never a hand-typed, possibly-diverging copy.
function findCoreStudent(key, name) {
    var courses = ENROLLMENT_DATA[key] || [];
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var c = courses_1[_i];
        var found = c.students.find(function (s) { return s.name === name; });
        if (found) {
            return found;
        }
    }
    throw new Error("Elective mock data: no core student named \"" + name + "\" found for key \"" + key + "\"");
}
// Same raw/exported split as RAW_ENROLLMENT_DATA/ENROLLMENT_DATA above - never read directly.
var RAW_ELECTIVE_ENROLLMENT_DATA = (_b = {},
    // Same key as the richest, most-used Core Course combination above (CS101-CS105) - reuses
    // four of those courses' own students across two elective courses.
    _b[buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A')] = (function () {
        var key = buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
        return [
            course('EL101', 'Cloud Computing Fundamentals', [
                electiveStudent(findCoreStudent(key, 'Aarav Sharma'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Priya Nair'), 'Pending'),
                electiveStudent(findCoreStudent(key, 'Advika Menon'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Arushi Bedi'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Sarthak Bajwa'), 'Pending')
            ]),
            course('EL102', 'Entrepreneurship Basics', [
                electiveStudent(findCoreStudent(key, 'Ananya Rao'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Karan Mehta'), 'Dropped'),
                electiveStudent(findCoreStudent(key, 'Kyra Dalal'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Prisha Kamdar'), 'Pending')
            ]),
            course('EL103', 'Technical Writing', [
                electiveStudent(findCoreStudent(key, 'Devansh Malviya'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Niyati Salvi'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Reyansh Save'), 'Pending')
            ])
        ];
    })(),
    // A different Degree+Department (M.Tech / Computer Science, a different Academic Year too)
    // so elective coverage isn't limited to a single branch of the dropdown tree.
    _b[buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A')] = (function () {
        var key = buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A');
        return [
            course('EL510', 'Research Methodology', [
                electiveStudent(findCoreStudent(key, 'Harshita Rane'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Varun Kapoor'), 'Pending'),
                electiveStudent(findCoreStudent(key, 'Simran Gill'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Rudransh Sinha'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Naira Dsouza'), 'Pending')
            ]),
            course('EL520', 'Technical Communication', [
                electiveStudent(findCoreStudent(key, 'Kavya Bhagat'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Yash Bora'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Advait Rane'), 'Dropped')
            ])
        ];
    })(),
    // A third, non-technical Degree+Department (MBA / Marketing) with two elective courses.
    _b[buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A')] = (function () {
        var key = buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A');
        return [
            course('EL201', 'Business Communication', [
                electiveStudent(findCoreStudent(key, 'Rhea Kohli'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Siddharth Rao'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Ishaan Dutta'), 'Pending'),
                electiveStudent(findCoreStudent(key, 'Kunal Oberoi'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Aditi Ranganathan'), 'Pending')
            ]),
            course('EL202', 'Negotiation Skills', [
                electiveStudent(findCoreStudent(key, 'Ayesha Siddiqui'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Vivaan Malhotra'), 'Dropped'),
                electiveStudent(findCoreStudent(key, 'Anushka Menezes'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Karan Suri'), 'Pending')
            ]),
            course('EL203', 'Public Speaking', [
                electiveStudent(findCoreStudent(key, 'Naina Kapadia'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Rehaan Bhagat'), 'Enrolled'),
                electiveStudent(findCoreStudent(key, 'Trisha Banerjee'), 'Dropped')
            ])
        ];
    })(),
    _b);
// Same expansion as ENROLLMENT_DATA above, but each elective course is expanded to that same
// key's CORE population (not a population built from the elective courses' own students) -
// so an Elective Course always shows the exact same students, with the exact same ids, as
// the Core Courses for that selection, never a separate elective-only population.
function expandElectiveCoursesToSharedPopulation(electiveData, coreData) {
    var result = {};
    Object.keys(electiveData).forEach(function (key) {
        var corePopulation = buildPopulation(coreData[key] || []);
        result[key] = electiveData[key].map(function (course) {
            return course.students.length > 0 ? expandCourseToPopulation(course, corePopulation) : course;
        });
    });
    return result;
}
var ELECTIVE_ENROLLMENT_DATA = expandElectiveCoursesToSharedPopulation(RAW_ELECTIVE_ENROLLMENT_DATA, ENROLLMENT_DATA);


/***/ }),

/***/ "./src/app/sidebar-toggle.service.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar-toggle.service.ts ***!
  \*******************************************/
/*! exports provided: SidebarToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleService", function() { return SidebarToggleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Shared show/hide state for the left navigation sidebar (rendered in AppComponent), toggled
// from the list icon on the Course-wise Enrollment page. A single injectable service - rather
// than an @Input/@Output pair - because the toggle control and the sidebar it controls live in
// two components that are siblings in the router tree (AppComponent hosts <router-outlet>,
// CourseWiseEnrollmentComponent is routed into it), with no direct parent/child relationship
// for @Input/@Output to bridge.
var SidebarToggleService = /** @class */ (function () {
    function SidebarToggleService() {
        this.visible = true;
    }
    SidebarToggleService.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    SidebarToggleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SidebarToggleService);
    return SidebarToggleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\component-role\course-enrollment-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map