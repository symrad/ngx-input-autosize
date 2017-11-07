webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded\">\n  <h1 class=\"navbar-brand mb-0\">Ngx-input-autosize</h1>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <br/>\n      <br/>\n      <h3>Example</h3>\n      <br/>\n      <input autosize [(ngModel)]=\"test\" style=\"font-size:30px;padding:0 15px\" placeholder=\"Write Here\" />\n      <br/><br/><br/>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h3>MyAppModule.ts</h3>\n        <br/>\n        <prism-block [code]=\"tsModuleCode\" [language]=\"'typescript'\"></prism-block>\n        <br/><br/>\n        <h3>MyAppComponent.ts</h3>\n        <br/>\n        <prism-block [code]=\"tsCode\" [language]=\"'typescript'\"></prism-block>\n        <br/><br/>\n        <h3>my-app.html</h3>\n        <br/>\n        <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n      </div>\n  </div>\n</div>\n<br/>\n<br/>\n\n"

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
        this.test = '';
        this.tsCode = "@Component({\n    selector: 'my-app',\n    templateUrl: 'my-app.html'\n  })\n  export class MyAppComponent{\n    model;\n  }";
        this.tsModuleCode = "@NgModule({\n    declarations: [\n      MyAppComponent\n    ],\n    imports: [\n      BrowserModule,\n      AutosizeInputModule,\n      FormsModule\n    ],\n    providers: [],\n    bootstrap: [MyAppComponent]\n  })\n  export class MyAppModule { }";
        this.htmlCode = "<input autosize [(ngModel)]=\"test\" style=\"font-size:30px;padding:0 15px\" placeholder=\"Write Here\" />";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autosize_input_autosizeInput_module__ = __webpack_require__("../../../../../src/autosize-input/autosizeInput.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_prism__ = __webpack_require__("../../../../angular-prism/dist/angular-prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_prism__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Import prism core */

/* Import the language you need to highlight */


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7_angular_prism__["PrismComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__autosize_input_autosizeInput_module__["a" /* AutosizeInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/autosize-input/autosize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeComponent; });
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

var AutosizeComponent = (function () {
    function AutosizeComponent(el) {
        this.el = el;
    }
    return AutosizeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('autosizeValue'),
    __metadata("design:type", Object)
], AutosizeComponent.prototype, "autosizeValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shadowElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AutosizeComponent.prototype, "shadowElement", void 0);
AutosizeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'div[autosize]',
        template: "<span style=\"white-space:pre;\" #shadowElement>{{autosizeValue}}</span>",
        styles: [':host { display:block;position: fixed; visibility:hidden; top: -9999px; left: 0px;}']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], AutosizeComponent);

var _a, _b;
//# sourceMappingURL=autosize.component.js.map

/***/ }),

/***/ "../../../../../src/autosize-input/autosizeInput.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosize_component__ = __webpack_require__("../../../../../src/autosize-input/autosize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutosizeDirective = (function () {
    function AutosizeDirective(resolver, element, vc, ngControl) {
        this.resolver = resolver;
        this.element = element;
        this.vc = vc;
        this.ngControl = ngControl;
        this.supportedInputTypes = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];
        this.cssProps = [
            'fontSize', 'fontFamily', 'fontWeight', 'fontStyle',
            'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent',
            'boxSizing', 'borderLeftWidth', 'borderRightWidth', 'borderLeftStyle', 'borderRightStyle',
            'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'
        ];
        this.placeholder = '';
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__autosize_component__["a" /* AutosizeComponent */]);
        this.autosizeComponent = this.vc.createComponent(factory).instance;
        this.placeholderAutoSizeComponent = this.vc.createComponent(factory).instance;
        for (var _i = 0, _a = this.cssProps; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (this.element.nativeElement.currentStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
            }
            else if (window.getComputedStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[prop];
                // tslint:disable-next-line:max-line-length
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[prop];
            }
        }
        if (this.element.nativeElement.placeholder) {
            this.placeholder = this.element.nativeElement.placeholder;
        }
        if (this.ngControl.valueChanges) {
            this.ngControl.valueChanges.subscribe(function (response) {
                _this.autosizeComponent.autosizeValue = response;
                _this.placeholderAutoSizeComponent.autosizeValue = _this.placeholder;
            });
        }
    };
    AutosizeDirective.prototype.ngAfterContentChecked = function () {
        this.adjust();
    };
    AutosizeDirective.prototype.adjust = function () {
        if (this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth >= this.autosizeComponent.el.nativeElement.offsetWidth
            && !this.ngControl.value) {
            this.element.nativeElement.style.width = this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth + 'px';
        }
        else {
            this.element.nativeElement.style.width = this.autosizeComponent.el.nativeElement.offsetWidth + 'px';
        }
    };
    return AutosizeDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('input', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutosizeDirective.prototype, "onInput", null);
AutosizeDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"])({
        selector: 'input[autosize]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NgControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NgControl */]) === "function" && _d || Object])
], AutosizeDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=autosizeInput.directive.js.map

/***/ }),

/***/ "../../../../../src/autosize-input/autosizeInput.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autosize_component__ = __webpack_require__("../../../../../src/autosize-input/autosize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosizeInput_directive__ = __webpack_require__("../../../../../src/autosize-input/autosizeInput.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AutosizeInputModule = (function () {
    function AutosizeInputModule() {
    }
    return AutosizeInputModule;
}());
AutosizeInputModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__autosizeInput_directive__["a" /* AutosizeDirective */],
            __WEBPACK_IMPORTED_MODULE_0__autosize_component__["a" /* AutosizeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__autosizeInput_directive__["a" /* AutosizeDirective */],
            __WEBPACK_IMPORTED_MODULE_0__autosize_component__["a" /* AutosizeComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_0__autosize_component__["a" /* AutosizeComponent */]]
    })
], AutosizeInputModule);

//# sourceMappingURL=autosizeInput.module.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map