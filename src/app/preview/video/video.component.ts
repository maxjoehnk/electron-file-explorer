import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-video-preview',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoPreviewComponent {
    @Input()
    path: string;
}
