import {Component, Input} from '@angular/core';
import {PreviewComponent} from '../preview.component';

@Component({
    selector: 'fe-video-preview',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoPreviewComponent implements PreviewComponent {
    @Input()
    file: any;
}
