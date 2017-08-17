import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {Store} from '@ngrx/store';
import {IState} from './store';
import {Navigate} from './store/actions/path';
import {remote} from 'electron';
const {app} = remote;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    viewMode = 'list';

    constructor(private iconRegistry: MdIconRegistry,
                private store: Store<IState>) {
        iconRegistry.setDefaultFontSetClass('mdi');
    }

    ngOnInit(): void {
        const path = app.getPath('home');
        this.store.dispatch(new Navigate(path));
    }

    changeViewMode(mode) {
        this.viewMode = mode;
    }

}
