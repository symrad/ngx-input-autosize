import { Component, ViewChild, Input, ElementRef } from '@angular/core';
var AutosizeComponent = (function () {
    function AutosizeComponent(el) {
        this.el = el;
    }
    return AutosizeComponent;
}());
export { AutosizeComponent };
AutosizeComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[autosize]',
                template: "<span style=\"white-space:pre;\" #shadowElement>{{autosizeValue}}</span>",
                styles: [':host { display:block;position: fixed; visibility:hidden; top: -9999px; left: 0px;}']
            },] },
];
/** @nocollapse */
AutosizeComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
AutosizeComponent.propDecorators = {
    'autosizeValue': [{ type: Input, args: ['autosizeValue',] },],
    'shadowElement': [{ type: ViewChild, args: ['shadowElement',] },],
};
//# sourceMappingURL=autosizeInput.component.js.map