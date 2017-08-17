import 'rxjs/add/operator/withLatestFrom';
import {Component, Input, OnInit} from '@angular/core';
import {IState} from '../store/index';
import {Store} from '@ngrx/store';
import {Navigate} from '../store/actions/path';
import {DialogComponent} from '../viewer/dialog/dialog.component';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {ipcRenderer} from 'electron';
import {FileComponent} from '../create/file/file.component';
import {CreateFile} from '../store/actions/items';

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
                private dialog: MdDialog) {}


    ngOnInit(): void {
        this.items = this.store.select('items');
    }

    onClick(item: any) {
        switch (item.type) {
            case 'folder':
                this.store.dispatch(new Navigate(item.path));
                break;
            case 'image':
            case 'video':
                this.dialog.open(DialogComponent, {
                    data: item
                });
                break;
            default:
                ipcRenderer.send('OPEN_ITEM', item.path);
                break;
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
