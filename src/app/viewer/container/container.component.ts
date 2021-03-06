import {
    Component,
    ComponentFactoryResolver,
    ViewChild,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import {ViewerService} from '../viewer.service';
import {ViewerDirective} from '../viewer.directive';
import {ViewerComponent} from '../viewer.component';

@Component({
    selector: 'fe-viewer-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})
export class ViewerContainerComponent implements OnChanges {

    @ViewChild(ViewerDirective)
    viewerHost: ViewerDirective;

    @Input()
    file: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewer: ViewerService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.file) {
            this.loadComponent();
        }
    }

    loadComponent() {
        let component = this.file && this.viewer.getComponentFromFile(this.file);
        if (component) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

            let viewContainerRef = this.viewerHost.viewContainerRef;
            viewContainerRef.clear();

            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<ViewerComponent>componentRef.instance).file = this.file;
        }
    }
}
