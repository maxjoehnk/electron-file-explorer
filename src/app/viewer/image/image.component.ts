import {Component, Input} from '@angular/core';
import {ViewerComponent} from '../viewer.component';

@Component({
    selector: 'fe-image-viewer',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageViewerComponent implements ViewerComponent {

    @Input()
    file: any;
}
