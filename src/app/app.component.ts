import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {Store} from "@ngrx/store";
import {IState} from "./store";
import {Navigate} from "./store/actions/path";
import {Observable} from "rxjs/Observable";
import {ipcRenderer} from 'electron';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    favorites = [
        {
            label: 'All my Files',
            icon: ''
        },
        {
            label: 'Applications',
            icon: 'mdi-apps',
            path: '/Applications'
        },
        {
            label: 'Google Drive',
            icon: 'mdi-google-drive',
            path: '/Users/max/Google Drive'
        },
        {
            label: 'Desktop',
            path: '/Users/max/Desktop'
        },
        {
            label: 'Documents',
            icon: 'mdi-file-multiple',
            path: '/Users/max/Documents'
        },
        {
            label: 'Downloads',
            icon: 'mdi-cloud-download',
            path: '/Users/max/Downloads'
        },
        {
            label: 'max',
            icon: 'mdi-home',
            path: '/Users/max'
        },
        {
            label: 'Code',
            path: '/Users/max/Documents/Code'
        },
        {
            label: 'Library',
            path: '/Users/max/Music/Traktor/Library'
        }
    ];

    items: Observable<any[]>;

    constructor(private iconRegistry: MdIconRegistry,
                private store: Store<IState>) {
        iconRegistry.setDefaultFontSetClass('mdi');
    }

    ngOnInit(): void {
        this.items = this.store.select('items');
    }

    navigate(path: string) {
        this.store.dispatch(new Navigate(path));
    }

    onClick(item: any) {
        if (item.directory) {
            this.navigate(item.path);
        }else {
            ipcRenderer.send('OPEN_ITEM', item.path);
        }
    }
}
