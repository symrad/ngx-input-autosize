import { NgModel, NgControl } from '@angular/forms';
import { AutosizeComponent } from './autosizeInput.component';
import { ElementRef, HostListener, Directive, AfterContentChecked, OnInit,
    ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewChecked, Input } from '@angular/core';

@Directive({
    selector: 'input[autosize]'
})

export class AutosizeDirective implements AfterContentChecked, OnInit, AfterViewChecked {
    public base: number;
    public supportedInputTypes:any;
    public cssProps:any;
    public autosizeComponent: AutosizeComponent;
    public placeholderAutoSizeComponent: AutosizeComponent;
    public placeholder: String;

    constructor(
        private resolver: ComponentFactoryResolver,
        private element: ElementRef,
        private vc: ViewContainerRef,
        private ngControl: NgControl
    ) {
        this.supportedInputTypes = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];
        this.cssProps = [
            'fontSize', 'fontFamily', 'fontWeight', 'fontStyle',
            'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent',
            'boxSizing', 'borderLeftWidth', 'borderRightWidth', 'borderLeftStyle', 'borderRightStyle',
            'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'
        ];
        this.placeholder = '';
    }

    @HostListener('input', ['$event.target']) onInput(textArea: HTMLInputElement): void {
        this.adjust();
    }

    @Input('autosizeProp') autosizeProp:any;

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(AutosizeComponent);
        this.autosizeComponent = this.vc.createComponent(factory).instance;
        this.placeholderAutoSizeComponent = this.vc.createComponent(factory).instance;

        for (const prop of this.cssProps){
            if (this.element.nativeElement.currentStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
            } else if (window.getComputedStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[<any>prop];
                // tslint:disable-next-line:max-line-length
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[<any>prop];
            }
        }

        if (this.ngControl.valueChanges) {
            this.ngControl.valueChanges.subscribe(response => {
                this.autosizeComponent.autosizeValue = response;
                if(typeof response == 'object'){
                    if(this.autosizeProp && response){
                        this.autosizeComponent.autosizeValue = response[this.autosizeProp];
                    }
                }
                if (this.element.nativeElement.placeholder) {
                    this.placeholder = this.element.nativeElement.placeholder;
                }
                this.placeholderAutoSizeComponent.autosizeValue = this.placeholder;
            });
        }
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    ngAfterViewChecked() {
        this.adjust();
    }

    adjust(): void {
        if (this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth >= this.autosizeComponent.el.nativeElement.offsetWidth
            && !this.ngControl.value) {
            this.element.nativeElement.style.width = this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth + 'px';
        } else {
            this.element.nativeElement.style.width = this.autosizeComponent.el.nativeElement.offsetWidth + 'px';
        }
    }
}
