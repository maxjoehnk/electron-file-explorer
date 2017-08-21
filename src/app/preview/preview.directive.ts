import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[fe-preview]'
})
export class PreviewDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }
}
