import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../../store';
import {Navigate} from '../../store/actions/path';
import {Observable} from "rxjs/Observable";
import {remote} from 'electron';

const { sep } = remote.require('path');

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    folders: Observable<any[]>;

    constructor(private store: Store<IState>) {}

    ngOnInit() {
        this.folders = this.store
            .select('path')
            .map(path => path.split(sep).map((part, i, path) => {
                if (i === 0) {
                    return {
                        label: part || '/',
                        path: part || sep
                    };
                }
                return {
                    label: part,
                    path: [...path].splice(0, i + 1).join(sep)
                };
            }));
    }

    navigate(path: string) {
        this.store.dispatch(new Navigate(path));
    }

}
