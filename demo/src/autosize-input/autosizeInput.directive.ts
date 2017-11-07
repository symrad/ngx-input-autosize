import { NgModel } from '@angular/forms';
import { AutosizeComponent } from './autosize.component';
import { ElementRef, HostListener, Directive, AfterContentChecked, OnInit,
    ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: 'input[autosize]'
})

export class AutosizeDirective implements AfterContentChecked, OnInit {
    base: number;
    supportedInputTypes = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];
    cssProps = [
        'fontSize', 'fontFamily', 'fontWeight', 'fontStyle',
        'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent',
        'boxSizing', 'borderLeftWidth', 'borderRightWidth', 'borderLeftStyle', 'borderRightStyle',
        'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'
    ];
    autosizeComponent: AutosizeComponent;
    placeholderAutoSizeComponent: AutosizeComponent;
    placeholder: String = '';

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
        this.placeholderAutoSizeComponent = this.vc.createComponent(factory).instance;

        for (const prop of this.cssProps){
            if (this.element.nativeElement.currentStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = this.element.nativeElement.currentStyle[prop];
            } else if (window.getComputedStyle) {
                this.autosizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[prop];
                // tslint:disable-next-line:max-line-length
                this.placeholderAutoSizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[prop];
            }
        }
        if (this.element.nativeElement.placeholder) {
            this.placeholder = this.element.nativeElement.placeholder;
        }
        this.ngModel.valueChanges.subscribe(response => {
            this.autosizeComponent.autosizeValue = response;
            this.placeholderAutoSizeComponent.autosizeValue = this.placeholder;
        });
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    adjust(): void {
        if (this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth >= this.autosizeComponent.el.nativeElement.offsetWidth) {
            this.element.nativeElement.style.width = this.placeholderAutoSizeComponent.el.nativeElement.offsetWidth + 'px';
        } else {
            this.element.nativeElement.style.width = this.autosizeComponent.el.nativeElement.offsetWidth + 'px';
        }
    }
}
