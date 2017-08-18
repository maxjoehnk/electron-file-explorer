import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-image-preview',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImagePreviewComponent {

    @Input()
    path: string;
}
