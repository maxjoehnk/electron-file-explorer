import {Component, Input} from '@angular/core';
import {ViewerComponent} from '../viewer.component';

@Component({
    selector: 'fe-video-viewer',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoViewerComponent implements ViewerComponent {

    @Input()
    file: any;
}
