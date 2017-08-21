import {
    Component,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewChild,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import {PreviewDirective} from '../preview.directive';
import {PreviewService} from '../preview.service';
import {PreviewComponent} from '../preview.component';

@Component({
    selector: 'fe-preview-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})
export class PreviewContainerComponent implements AfterViewInit, OnChanges {

    @ViewChild(PreviewDirective)
    previewHost: PreviewDirective;

    @Input()
    file: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private preview: PreviewService) {
    }

    ngAfterViewInit() {
        this.loadComponent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.loadComponent();
    }

    loadComponent() {
        let component = this.file && this.preview.getComponentFromFile(this.file);
        if (component) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

            let viewContainerRef = this.previewHost.viewContainerRef;
            viewContainerRef.clear();

            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<PreviewComponent>componentRef.instance).file = this.file;
        }
    }
}
