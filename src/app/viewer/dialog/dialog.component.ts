import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'fe-viewer-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class ViewerDialogComponent {

    constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    }

}
