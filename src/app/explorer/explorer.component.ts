import {Component, Input, OnInit} from '@angular/core';
import {IState} from '../store/index';
import {Store} from '@ngrx/store';
import {Navigate} from '../store/actions/path';
import {DialogComponent} from '../viewer/dialog/dialog.component';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {ipcRenderer} from 'electron';

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
        if (item.directory) {
            this.store.dispatch(new Navigate(item.path));
        } else {
            if (item.type) {
                this.dialog.open(DialogComponent, {
                    data: item
                });
            } else {
                ipcRenderer.send('OPEN_ITEM', item.path);
            }
        }
    }
}
