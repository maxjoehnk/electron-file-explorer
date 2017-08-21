import {Component, Input, ElementRef, ViewChild} from '@angular/core';
import {PreviewComponent} from '../preview.component';

@Component({
    selector: 'fe-video-preview',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoPreviewComponent implements PreviewComponent {
    @Input()
    file: any;

    playing: boolean = false;

    @ViewChild('video')
    ref: ElementRef;

    toggle($event) {
        $event.stopPropagation();
        this.playing = !this.playing;
        if (this.playing) {
            this.ref.nativeElement.play();
        }else {
            this.ref.nativeElement.pause();
        }
    }
}
