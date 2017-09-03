webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#about-me {\n\tfont: small-caps;\n\ttext-align: center;\n\tfont-weight: bold;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tfont-family: Merriweather;\n\tfont-size: 1.00em;\n}\n\nh1.title {\n\t/*color: #800040;*/\n\tcolor: #2079c7;\n\tfont-weight: normal;\n}\n\ntable {\n\tmargin: auto;\n\tfont-size: larger;\n\tborder: none;\n\twidth: auto;\n}\n\ntd.key {\n\ttext-align: left;\n\tfont-weight: normal;\n\twidth: 40%;\n\tvertical-align: text-top;\n\tpadding-left: 15%;\n}\n\ntd.value {\n\ttext-align: left;\n\tfont-weight: normal;\n\tpadding-left: 10px;\n\twidth: 80%;\n\tword-wrap: break-word;\n\tcolor: #83888A;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div name=\"aboutMe\"> </div>\n<div id=\"about-me\">\n  <h1 class=\"title\">About Me</h1>\n  <table>\n  \t<tr>\n  \t\t<td class=\"key\">&nbsp; Name: &nbsp;</td>\n  \t\t<td class=\"value\">Rajyash Gosalia &nbsp;</td>\n  \t</tr>\n  \t<tr>\n  \t\t<td class=\"key\">&nbsp; Company: &nbsp;\n      </td>\n  \t\t<td class=\"value\">Zobrist Consulting Group, Inc. &nbsp;</td>\n  \t</tr>\n  \t<tr>\n  \t\t<td class=\"key\">&nbsp; Position: &nbsp;</td>\n  \t\t<td class=\"value\">Java Developer &nbsp;</td>\n  \t</tr>\n    <tr>\n      <td class=\"key\">&nbsp; Location: &nbsp;</td>\n      <td class=\"value\">Los Angeles &nbsp;</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__("../../../../../src/app/about-me/about-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-me/about-me.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#my-app {\n\t/*padding: 100px;\n\tpadding-top: 20px;*/\n}\n\n.navbar {\n  overflow: hidden;\n  background-color: #333;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.navbar a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 1em;\n}\n\n.main {\n\t\n}\n\n/*ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    border-radius: 12px;\n    width: 100%;\n    position: absolute;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 1em;\n}\n\nli a:hover {\n    background-color: #111;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#certifications\">About</a></li>\n</ul> -->\n<div id=\"my-app\" style=\"text-align:center\" class=\"main\">\n  <!-- <h1>\n    Welcome to {{title}}!!\n  </h1> -->\n  <app-my-intro></app-my-intro>\n  <br>\n  <hr>\n  <app-about-me></app-about-me>\n  <br>\n  <hr>\n  <div id=\"app-2\">\n  <app-my-experience></app-my-experience>\n  </div>\n  <br>\n  <hr>\n  <app-my-skills></app-my-skills>\n  <br>\n  <hr>\n  <app-my-education></app-my-education>\n  <br>\n  <hr>\n  <app-certifications></app-certifications>\n  <br>\n  <hr>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Merriweather\" />\n</div>\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_experience_my_experience_component__ = __webpack_require__("../../../../../src/app/my-experience/my-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_intro_my_intro_component__ = __webpack_require__("../../../../../src/app/my-intro/my-intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_skills_my_skills_component__ = __webpack_require__("../../../../../src/app/my-skills/my-skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_education_my_education_component__ = __webpack_require__("../../../../../src/app/my-education/my-education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__certifications_certifications_component__ = __webpack_require__("../../../../../src/app/certifications/certifications.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__my_experience_my_experience_component__["a" /* MyExperienceComponent */],
            __WEBPACK_IMPORTED_MODULE_4__my_intro_my_intro_component__["a" /* MyIntroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__my_skills_my_skills_component__["a" /* MySkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__my_education_my_education_component__["a" /* MyEducationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__certifications_certifications_component__["a" /* CertificationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/certifications/certifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#certifications {\n\tfont: small-caps;\n\tfont-weight: bold;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tfont-family: Merriweather;\n\tfont-size: 1.00em;\n}\n\nh1.title {\n\t/*color: #800040;*/\n\tcolor: #2079c7;\n\tfont-weight: normal;\n}\n\nspan.description {\n\t/*background-color: #f2f2f2;*/\n\tcolor: #83888A;\n\twidth: auto;\n\tfont-size: 1.0em;\n\theight: auto;\n\tfont-weight: normal;\n\ttext-align: left;\n}\n\nspan.description ul {\n\tpadding-left: 12%;\n\tpadding-right: 10%;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tposition: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/certifications/certifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"certifications\">\n  <h1 class=\"title\">Certifications</h1>\n  <span class=\"description\">\n  <ul>\n  \t<li>IBM Certified Associate Developer - Rational Application Developer for Websphere Software V6.0</li>\n  \t<li>Udacity Certificate for successfully completing the project on Hadoop and MapReduce.</li>\n  </ul>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/certifications/certifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificationsComponent = (function () {
    function CertificationsComponent() {
    }
    CertificationsComponent.prototype.ngOnInit = function () {
    };
    return CertificationsComponent;
}());
CertificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-certifications',
        template: __webpack_require__("../../../../../src/app/certifications/certifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/certifications/certifications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CertificationsComponent);

//# sourceMappingURL=certifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-education/my-education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#my-education {\n\tfont: small-caps;\n\ttext-align: center;\n\tfont-weight: bold;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tfont-family: Merriweather;\n\tfont-size: 1.00em;\n}\n\nh1.title {\n\t/*color: #800040;*/\n\tcolor: #2079c7;\n\tfont-weight: normal;\n}\n\nh2 {\n\tfont-weight: normal;\n\tfont-size: larger;\n\ttext-align: left;\n\tpadding-left: 10%;\n}\n\ntable {\n\tmargin: auto;\n\tfont-size: larger;\n\tborder: none;\n\twidth: 80%;\n}\n\ntd.key {\n\ttext-align: left;\n\tfont-weight: normal;\n\twidth: 60%;\n\tvertical-align: text-top;\n\tcolor: #83888A;\n\tfont-size: 0.815em;\n}\n\ntd.value {\n\ttext-align: right;\n\tfont-weight: normal;\n\tfont-size: 0.815em;\n\twidth: 40%;\n\tword-wrap: normal;\n\tcolor: #83888A;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-education/my-education.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"my-education\">\n  <h1 class=\"title\">Education</h1>\n  <h2>California State University, Los Angeles</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"key\">Master Of Science in Computer Science</td>\n  \t\t<td class=\"value\">Sep, 2013 - Jun, 2015</td>\n  \t</tr>\n  </table>\n  <h2>Nirma University, India</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"key\">Bachelor Of Technology in Information Technology</td>\n  \t\t<td class=\"value\">July, 2007 - June, 2011</td>\n  \t</tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-education/my-education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyEducationComponent = (function () {
    function MyEducationComponent() {
    }
    MyEducationComponent.prototype.ngOnInit = function () {
    };
    return MyEducationComponent;
}());
MyEducationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-my-education',
        template: __webpack_require__("../../../../../src/app/my-education/my-education.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-education/my-education.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyEducationComponent);

//# sourceMappingURL=my-education.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-experience/my-experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#experience {\n\tfont: small-caps;\n\ttext-align: center;\n\tfont-weight: bold;\n\tfont-family: Merriweather;\n\tfont-size: 1.00em;\n}\n\nh1.title {\n\tcolor: #2079c7;\n\tfont-weight: normal;\n\t/*font-size: 3.5em;*/\n}\n\nh2 {\n\tfont-weight: normal;\n\tfont-size: larger;\n}\n\nspan.duration {\n\tfloat: right;\n\tfont-size: large;\n\t/*font-size: 0.8em;*/\n}\n\nh3 {\n\tfont-weight: normal;\n\t/*font-size: 1.00em;*/\n\tfont-size: larger;\n\tline-height: 50%;\n}\n\nh3.project-title {\n\tcolor: #800040;\n\tfont-family: sans-serif;\n\t/*font-size: 1.00em;*/\n\tfont-size: larger;\n\tfont-style: italic;\n\tfont-family: Merriweather;\n}\n\nspan.description {\n\t/*background-color: #f2f2f2;*/\n\tcolor: #83888A;\n\twidth: 100%;\n\tfont-size: 1.0em;\n\theight: auto;\n\tfont-weight: normal;\n}\n\nh4 {\n\tfont-weight: normal;\n\t/*font-size: 1.00em;*/\n\tfont-size: larger;\n\tline-height: 50%;\n}\n\n#company-1 {\n\tborder: none;\n\twidth: 80%;\n\tmargin: auto;\n\ttext-align: left;\n\tpadding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-experience/my-experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"experience\">\n  <h1 class=\"title\">Work Experience</h1>\n  <div id=\"company-1\">\n  \t<h2>Zobrist Consulting Group, Inc. </h2>\n  \t<h3>Java Developer <span class=\"duration\">August, 2015 - Present</span></h3>\n  \t<h4>Projects</h4>\n  \t<div id=\"projects\">\n  \t\t<h3 class=\"project-title\">Smart Merchandiser</h3>\n  \t\t<span class=\"description\">Smart Merchandiser is a single page NodeJS app that helps merchandisers to micromanage their ecommerce websites. Smart Merchandiser also has a number of analytics providers to provide analytical data which can be used by merchandisers to anticipate the sale of a product.<br>\n  \t\tSmart Merchandiser Application comprises of various microservices and the main technologies used are Java and NodeJS. As a part of the development team, I got the opportunity to work on various microservices used in the project and the different technologies used in all the modules. Some such contributions include:\n  \t\t<ul>\n  \t\t\t<li>Developing optimized backend APIs in NodeJS for a better performance of the application.</li>\n  \t\t\t<li>Developing the Analytics module in Java to fetch real time analytics data from Google Analytics, Omniture and Coremetrics.</li>\n  \t\t\t<li>Implementing Websphere Commerce Webservices using SOAP and REST.</li>\n  \t\t\t<li>Developing unit test cases using the mocha framework.</li>\n  \t\t\t<li>Developing front-end components using ReactJS and Flux architecture.</li>\n  \t\t</ul>\n  \t\t</span>\n  \t</div>\n  </div>\n  <div id=\"company-1\">\n  \t<h2>Zobrist Consulting Group, Inc. </h2>\n  \t<h3>Websphere Commerce Intern <span class=\"duration\">June, 2014 - June, 2015</span></h3>\n  \t<div id=\"projects\">\n  \t\t<h3 class=\"project-title\">Commerce Test Automation</h3>\n  \t\t<span class=\"description\">Commerce Test Automation was an automated browsed based testing of different ecommerce brands with different configurations.<br>\n  \t\tThe project comprised of writing automated selenium based test cases in Java. It helped determine how stable the next release was and helped to identify bugs seen on different browsers. The project involved:\n  \t\t<ul>\n  \t\t\t<li>Designing the automation scripts.</li>\n  \t\t\t<li>Developing the automated to scripts using selenium for various browsers.</li>\n  \t\t\t<li>Report generation of the automated scripts to make it easier to debug after they were run.</li>\n  \t\t</ul>\n  \t\t</span>\n  \t</div>\n  </div>\n  <div id=\"company-1\">\n  \t<h2>Infosys Limited </h2>\n  \t<h3>Systems Engineer <span class=\"duration\">June, 2011 - August, 2013</span></h3>\n  \t<div id=\"projects\">\n      <h3 class=\"project-title\">SWIFT</h3>\n  \t\t<span class=\"description\">SWIFT stands for Software Implementation &amp; Fulfillment Technology. This project mainly dealt with the license generation technology of the Cisco products. The project helped the client (Cisco) to integrate and validate new products that were being introduced. <br>\n  \t\tThe project was developed in Java using struts 2.0. My contributions to the project involved:\n  \t\t<ul>\n  \t\t\t<li>Managing a team of three developers and completed the development as well as integration of a smaller project/module into the existing Web Application .</li>\n  \t\t\t<li>Authored documents like Functional Specification Document and detailed Technical Design Document.</li>\n  \t\t\t<li>Integrating the newly released/acquired products into the existing application and simultaneously working on the enhancements and bug fixes.</li>\n  \t\t\t<li>Proactively took the responsibility to train the new joinees about the processes being followed, architecture implemented and technology being used.</li>\n  \t\t\t<li>Developing web modules that dealt with the reports and graphs of Cisco sales in various quarters.</li>\n  \t\t</ul>\n  \t\t</span>\n  \t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-experience/my-experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyExperienceComponent = (function () {
    function MyExperienceComponent() {
    }
    MyExperienceComponent.prototype.ngOnInit = function () {
    };
    return MyExperienceComponent;
}());
MyExperienceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-my-experience',
        template: __webpack_require__("../../../../../src/app/my-experience/my-experience.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-experience/my-experience.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyExperienceComponent);

//# sourceMappingURL=my-experience.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-intro/my-intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#introduction {\n\tfont: small-caps;\n\ttext-align: center;\n\tfont-weight: bold;\n\tpadding-top: 5px;\n\tfont-family: Merriweather;\n\tfont-size: 1.50em;\n}\n\nh1.name {\n\tcolor:#334d4d;\n}\n\nh4.profile-links {\n\tcolor: #476b6b;\n\tfont-weight: normal;\n}\n\nh3.current {\n\tcolor: #83888A !important;\n\tfont-weight: normal !important;\n\tfont-style: italic !important;\n\tfont-size: 0.8em;\n\twidth: 70%;\n\tmargin-left: 15%;\n\tmargin-right: 15%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-intro/my-intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"introduction\" name=\"introduction\">\n\t<h1 class=\"name\">Rajyash Gosalia</h1>\n\t<h4 class=\"profile-links\">\n\t\trajyash.gosalia@gmail.com\n\t</h4>\n\t<h4 class=\"profile-links\">\n\t\thttp://www.linkedin.com/in/rajyashgosalia\n\t</h4>\n\t<h3 class=\"current\">\"Hired as a Java Developer and currently working as a full stack developer with technologies like Node and React using Flux and Redux architecture.\"</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-intro/my-intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyIntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyIntroComponent = (function () {
    function MyIntroComponent() {
    }
    MyIntroComponent.prototype.ngOnInit = function () {
    };
    return MyIntroComponent;
}());
MyIntroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-my-intro',
        template: __webpack_require__("../../../../../src/app/my-intro/my-intro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-intro/my-intro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyIntroComponent);

//# sourceMappingURL=my-intro.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-skills/my-skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#my-skills {\n\tfont: small-caps;\n\ttext-align: center;\n\tfont-weight: bold;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\tfont-family: Merriweather;\n\tfont-size: 1.00em;\n}\n\nh1.title {\n\t/*color: #800040;*/\n\tcolor: #2079c7;\n\tfont-weight: normal;\n}\n\nh2 {\n\tfont-weight: normal;\n\tfont-size: larger;\n\ttext-align: left;\n\tpadding-left: 10%;\n}\n\ntable {\n\tmargin: auto;\n\tfont-size: larger;\n\tborder: none;\n\twidth: 70%;\n}\n\ntd.value {\n\ttext-align: left;\n\tfont-weight: normal;\n\tpadding-left: 0px;\n\twidth: 25%;\n\tword-wrap: normal;\n\tcolor: #83888A;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-skills/my-skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"my-skills\">\n  <h1 class=\"title\">Skills</h1>\n  <h2>Languages:</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"value\">Java</td>\n  \t\t<td class=\"value\">Javascript</td>\n  \t\t<td class=\"value\">HTML</td>\n  \t\t<td class=\"value\">CSS</td>\n  \t</tr>\n  </table>\n  <h2>Frameworks &nbsp;&amp;&nbsp;  Architecture:</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"value\">Node.js</td>\n  \t\t<td class=\"value\">Express</td>\n  \t\t<td class=\"value\">React.js</td>\n  \t\t<td class=\"value\">Flux</td>\n  \t</tr>\n  \t<tr>\n  \t\t<td class=\"value\">Redux</td>\n  \t\t<td class=\"value\">Struts</td>\n  \t\t<td class=\"value\">Spring</td>\n  \t\t<td class=\"value\">Hibernate</td>\n  \t</tr>\n  </table>\n  <h2>Databases:</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"value\">Oracle</td>\n  \t\t<td class=\"value\">MySQL</td>\n  \t\t<td class=\"value\">CouchDB</td>\n  \t\t<td class=\"value\">&nbsp;</td>\n  \t</tr>\n  </table>\n  <h2>Tools &amp; Technologies:</h2>\n  <table>\n  \t<tr>\n  \t\t<td class=\"value\">Git</td>\n  \t\t<td class=\"value\">Selenium</td>\n  \t\t<td class=\"value\">IBM Bluemix</td>\n  \t\t<td class=\"value\">Cloud Foundry</td>\n  \t</tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-skills/my-skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MySkillsComponent = (function () {
    function MySkillsComponent() {
    }
    MySkillsComponent.prototype.ngOnInit = function () {
    };
    return MySkillsComponent;
}());
MySkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-my-skills',
        template: __webpack_require__("../../../../../src/app/my-skills/my-skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-skills/my-skills.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MySkillsComponent);

//# sourceMappingURL=my-skills.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map