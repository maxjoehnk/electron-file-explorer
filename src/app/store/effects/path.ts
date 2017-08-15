import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { ipcRenderer, remote } from 'electron';

const { app } = remote;

import { Navigate, PATH_NAVIGATE } from '../actions/path';
import { ITEMS_FETCH } from '../actions/items';
import { IState } from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class PathEffects {

    constructor(
        private actions$: Actions,
        private store: Store<IState>
    ) {
        store.dispatch(new Navigate(app.getPath('home')));
    }

    @Effect()
    items$ = this.actions$
        .ofType<Navigate>(PATH_NAVIGATE)
        .map(({ payload }) => ({ type: ITEMS_FETCH, payload }));

}
