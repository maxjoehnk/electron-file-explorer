import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-video-viewer',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    @Input()
    path: string;

    constructor() {
    }

    ngOnInit() {
    }

}
