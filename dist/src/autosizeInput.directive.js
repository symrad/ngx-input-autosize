import { NgControl } from '@angular/forms';
import { AutosizeComponent } from './autosizeInput.component';
import { ElementRef, HostListener, Directive, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
export { AutosizeDirective };
AutosizeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[autosize]'
            },] },
];
/** @nocollapse */
AutosizeDirective.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: NgControl, },
]; };
AutosizeDirective.propDecorators = {
    'onInput': [{ type: HostListener, args: ['input', ['$event.target'],] },],
};
//# sourceMappingURL=autosizeInput.directive.js.map