import {
    Component,
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
export class PreviewContainerComponent implements OnChanges {

    @ViewChild(PreviewDirective)
    previewHost: PreviewDirective;

    @Input()
    file: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private preview: PreviewService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.file) {
            this.loadComponent();
        }
    }

    loadComponent() {
        const viewContainerRef = this.previewHost.viewContainerRef;
        viewContainerRef.clear();
        const component = this.file && this.preview.getComponentFromFile(this.file);
        if (component) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<PreviewComponent>componentRef.instance).file = this.file;
        }
    }
}
