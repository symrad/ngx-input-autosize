(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.inputautosize = {}),global.core,global.forms,global.common));
}(this, (function (exports,core,forms,common) { 'use strict';

var AutosizeComponent = (function () {
    function AutosizeComponent(el) {
        this.el = el;
    }
    return AutosizeComponent;
}());
AutosizeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'div[autosize]',
                template: "<span style=\"white-space:pre;\" #shadowElement>{{autosizeValue}}</span>",
                styles: [':host { display:block;position: fixed; visibility:hidden; top: -9999px; left: 0px;}']
            },] },
];
/** @nocollapse */
AutosizeComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
AutosizeComponent.propDecorators = {
    'autosizeValue': [{ type: core.Input, args: ['autosizeValue',] },],
    'shadowElement': [{ type: core.ViewChild, args: ['shadowElement',] },],
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
        var factory = this.resolver.resolveComponentFactory(AutosizeComponent);
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
        if (this.ngControl.valueChanges) {
            this.ngControl.valueChanges.subscribe(function (response) {
                _this.autosizeComponent.autosizeValue = response;
                if (typeof response == 'object') {
                    if (_this.autosizeProp && response) {
                        _this.autosizeComponent.autosizeValue = response[_this.autosizeProp];
                    }
                }
                if (_this.element.nativeElement.placeholder) {
                    _this.placeholder = _this.element.nativeElement.placeholder;
                }
                _this.placeholderAutoSizeComponent.autosizeValue = _this.placeholder;
            });
        }
    };
    AutosizeDirective.prototype.ngAfterContentChecked = function () {
        this.adjust();
    };
    AutosizeDirective.prototype.ngAfterViewChecked = function () {
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
AutosizeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'input[autosize]'
            },] },
];
/** @nocollapse */
AutosizeDirective.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
    { type: core.ElementRef, },
    { type: core.ViewContainerRef, },
    { type: forms.NgControl, },
]; };
AutosizeDirective.propDecorators = {
    'onInput': [{ type: core.HostListener, args: ['input', ['$event.target'],] },],
    'autosizeProp': [{ type: core.Input, args: ['autosizeProp',] },],
};

var AutosizeInputModule = (function () {
    function AutosizeInputModule() {
    }
    return AutosizeInputModule;
}());
AutosizeInputModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    AutosizeDirective,
                    AutosizeComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                exports: [
                    AutosizeDirective,
                    AutosizeComponent
                ],
                entryComponents: [AutosizeComponent]
            },] },
];
/** @nocollapse */
AutosizeInputModule.ctorParameters = function () { return []; };

exports.AutosizeComponent = AutosizeComponent;
exports.AutosizeDirective = AutosizeDirective;
exports.AutosizeInputModule = AutosizeInputModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
