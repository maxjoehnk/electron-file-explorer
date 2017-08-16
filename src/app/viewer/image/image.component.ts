import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

    @Input()
    path: string;

    constructor() {
    }

    ngOnInit() {
    }

}
