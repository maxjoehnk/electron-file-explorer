import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss']
})
export class FileComponent {

    filename: string;

    constructor(private dialogRef: MdDialogRef<string>) {
    }

    create() {
        this.dialogRef.close(this.filename);
    }

}
