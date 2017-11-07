import { AutosizeComponent } from './autosizeInput.component';
import { AutosizeDirective } from './autosizeInput.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
var AutosizeInputModule = (function () {
    function AutosizeInputModule() {
    }
    return AutosizeInputModule;
}());
export { AutosizeInputModule };
AutosizeInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AutosizeDirective,
                    AutosizeComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule
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
//# sourceMappingURL=autosizeInput.module.js.map