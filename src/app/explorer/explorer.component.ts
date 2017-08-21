import 'rxjs/add/operator/withLatestFrom';
import {Component, Input, OnInit} from '@angular/core';
import {IState} from '../store/index';
import {Store} from '@ngrx/store';
import {Navigate} from '../store/actions/path';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {ipcRenderer} from 'electron';
import {FileComponent} from '../create/file/file.component';
import {CreateFile} from '../store/actions/items';
import {OpenPreview} from '../store/actions/preview';
import {ViewerService} from '../viewer/viewer.service';
import {FileService} from '../common/file.service';

@Component({
    selector: 'app-explorer',
    templateUrl: './explorer.component.html',
    styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

    @Input()
    viewMode: string = 'list';

    items: Observable<any[]>;

    constructor(private store: Store<IState>,
                private dialog: MdDialog,
                private viewer: ViewerService,
                private file: FileService) {
    }


    ngOnInit(): void {
        this.items = this.store.select('items');
    }

    preview(item: any) {
        this.store.dispatch(new OpenPreview(item));
    }

    open(item: any) {
        if (item.directory) {
            this.store.dispatch(new Navigate(item.path));
        } else if (this.file.hasInternalViewer(item)) {
            this.viewer.openInModal(item);
        } else {
            ipcRenderer.send('OPEN_ITEM', item.path);
        }
    }

    create() {
        const dialogRef = this.dialog.open(FileComponent);
        dialogRef
            .afterClosed()
            .withLatestFrom(this.store.select('path'))
            .subscribe(([filename, path]) => {
                if (filename) {
                    this.store.dispatch(new CreateFile(path, filename));
                }
            });
    }
}
