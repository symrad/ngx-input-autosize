import { NgControl } from '@angular/forms';
import { AutosizeComponent } from './autosizeInput.component';
import { ElementRef, AfterContentChecked, OnInit, ViewContainerRef, ComponentFactoryResolver, AfterViewChecked } from '@angular/core';
export declare class AutosizeDirective implements AfterContentChecked, OnInit, AfterViewChecked {
    private resolver;
    private element;
    private vc;
    private ngControl;
    base: number;
    supportedInputTypes: any;
    cssProps: any;
    autosizeComponent: AutosizeComponent;
    placeholderAutoSizeComponent: AutosizeComponent;
    placeholder: String;
    constructor(resolver: ComponentFactoryResolver, element: ElementRef, vc: ViewContainerRef, ngControl: NgControl);
    onInput(textArea: HTMLInputElement): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    adjust(): void;
}
