import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MinimizeWindow, MaximizeWindow, CloseWindow} from '../../store/actions/window';
import { IState } from '../../store';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-app-bar',
    templateUrl: './app-bar.component.html',
    styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

    path: Observable<string>;

    constructor(private store: Store<IState>) {}

    ngOnInit() {
        this.path = this.store.select('path');
    }

    onMinimize() {
        this.store.dispatch(new MinimizeWindow());
    }

    onMaximize() {
        this.store.dispatch(new MaximizeWindow());
    }

    onClose() {
        this.store.dispatch(new CloseWindow());
    }

}
