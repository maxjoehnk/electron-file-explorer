import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/index';
import {ClosePreview} from '../store/actions/preview';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

    @Input()
    file;

    constructor(private store: Store<IState>) {}

    isImage(): boolean {
        return /^image\/.*/.test(this.file ? this.file.mimetype : '');
    }

    isVideo(): boolean {
        return /^video\/.*/.test(this.file ? this.file.mimetype : '');
    }

    close() {
        this.store.dispatch(new ClosePreview());
    }
}
