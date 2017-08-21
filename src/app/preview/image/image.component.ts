import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PreviewComponent} from '../preview.component';
import {decode, toRGBA8} from 'utif';
import {Http} from '@angular/http';

@Component({
    selector: 'fe-image-preview',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImagePreviewComponent implements PreviewComponent {

    @Input()
    set file(file: any) {
        if (file) {
            if (file.mimetype === 'image/tiff') {
                this.native = false;
                this.convertTiff(file);
            } else {
                this.native = true;
                this.path = `file://${file.path}`;
            }
        }
    }

    @ViewChild('canvas')
    canvas: ElementRef;

    path: string = '';
    native: boolean = true;

    constructor(private http: Http) {
    }

    convertTiff(file) {
        this.http
            .get(`file://${file.path}`)
            .map(res => res.arrayBuffer())
            .subscribe(buffer => {
                const pages = decode(buffer);
                const [page] = pages;
                const image = toRGBA8(page);
                const context = this.canvas.nativeElement.getContext('2d');
                context.putImageData(image);
            });
    }
}
