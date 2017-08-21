import {Component, Input} from '@angular/core';
import {PreviewComponent} from '../preview.component';

@Component({
    selector: 'fe-icon-preview',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconPreviewComponent implements PreviewComponent {

    @Input()
    file: any;
}
