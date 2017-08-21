import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[fe-viewer]'
})
export class ViewerDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }

}
