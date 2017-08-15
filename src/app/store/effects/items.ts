import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';

import {ITEMS_FETCH, FetchItemsSuccess, FetchItems} from '../actions/items';
import { IState } from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class ItemEffects {

    constructor(
        private actions$: Actions,
        private store: Store<IState>
    ) {
        ipcRenderer.on('FETCH_ITEMS', (event, items) => {
            store.dispatch(new FetchItemsSuccess(items));
        });
    }

    @Effect({ dispatch: false })
    fetch$ = this.actions$
        .ofType<FetchItems>(ITEMS_FETCH)
        .do(({ payload }) => ipcRenderer.send('FETCH_ITEMS', payload));
}
