import { NgModel } from '@angular/forms';
import { element } from 'protractor';
import { AutosizeComponent } from './autosizeInput.component';
import { ElementRef, HostListener, Directive, AfterContentChecked, OnInit,
    ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: 'input[autosize]'
})

export class AutosizeDirective implements AfterContentChecked, OnInit {
    public base: number;
    public supportedInputTypes: Array<string> = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];
    public cssProps:Array<string> = [
        'fontSize', 'fontFamily', 'fontWeight', 'fontStyle',
        'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent',
        'boxSizing', 'borderLeftWidth', 'borderRightWidth', 'borderLeftStyle', 'borderRightStyle',
        'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'
    ];
    public autosizeValue: any;
    public autosizeComponent: AutosizeComponent;

    @HostListener('input', ['$event.target']) onInput(textArea: HTMLInputElement): void {
        this.adjust();
    }

    constructor(
        private resolver: ComponentFactoryResolver,
        private element: ElementRef,
        private vc: ViewContainerRef,
        private ngModel: NgModel
    ) {

    }

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(AutosizeComponent);
        this.autosizeComponent = this.vc.createComponent(factory).instance;
        for (const prop of this.cssProps){
            if (this.element.nativeElement.currentStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
            } else if (window.getComputedStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[<any>prop];
            }
        }
        if(this.ngModel.valueChanges){
            this.ngModel.valueChanges.subscribe(response => {
                this.autosizeComponent.autosizeValue = response;
            });
        }
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    adjust(): void {
        this.element.nativeElement.style.width = this.autosizeComponent.el.nativeElement.offsetWidth + 'px';
    }
}
