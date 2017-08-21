import {Component, Input} from '@angular/core';
import {PreviewComponent} from '../preview.component';

@Component({
    selector: 'fe-image-preview',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImagePreviewComponent implements PreviewComponent {

    @Input()
    file: any;
}
