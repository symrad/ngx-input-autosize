import { Component, ViewContainerRef, ComponentFactoryResolver, NgZone, VERSION, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'div[autosize]',
  template: `<span style="white-space:pre;" #shadowElement>{{autosizeValue}}</span>`,
  styles: [':host { display:block;position: fixed; visibility:hidden; top: -9999px; left: 0px;}']
})
export class AutosizeComponent {
    @Input('autosizeValue') autosizeValue: any;
    @ViewChild('shadowElement') shadowElement: ElementRef;

    constructor(public el: ElementRef) {}
}
