import { NgModel } from '@angular/forms';
import { AutosizeComponent } from './autosizeInput.component';
import { ElementRef, AfterContentChecked, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
export declare class AutosizeDirective implements AfterContentChecked, OnInit {
    private resolver;
    private element;
    private vc;
    private ngModel;
    base: number;
    supportedInputTypes: string[];
    cssProps: string[];
    autosizeComponent: AutosizeComponent;
    placeholderAutoSizeComponent: AutosizeComponent;
    placeholder: String;
    onInput(textArea: HTMLInputElement): void;
    constructor(resolver: ComponentFactoryResolver, element: ElementRef, vc: ViewContainerRef, ngModel: NgModel);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    adjust(): void;
}
