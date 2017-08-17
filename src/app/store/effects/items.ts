import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {ipcRenderer} from 'electron';

import {
    ITEMS_FETCH,
    ITEMS_CREATE_FILE,
    ITEMS_CREATE_FILE_SUCCESS,
    FetchItemsSuccess,
    FetchItems,
    CreateFile,
    CreateFileSuccess
} from '../actions/items';
import {IState} from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class ItemEffects {

    constructor(private actions$: Actions,
                private store: Store<IState>) {
        ipcRenderer.on('FETCH_ITEMS', (event, items) => {
            store.dispatch(new FetchItemsSuccess(items));
        });
        ipcRenderer.on('CREATE_FILE_SUCCESS', () => {
            store.dispatch(new CreateFileSuccess());
        });
    }

    @Effect({dispatch: false})
    fetch$ = this.actions$
        .ofType<FetchItems>(ITEMS_FETCH)
        .do(({payload}) => ipcRenderer.send('FETCH_ITEMS', payload));

    @Effect({dispatch: false})
    createFile$ = this.actions$
        .ofType<CreateFile>(ITEMS_CREATE_FILE)
        .do(({payload}) => ipcRenderer.send('CREATE_FILE', payload));

    @Effect()
    createFileSuccess$ = this.actions$
        .ofType<CreateFileSuccess>(ITEMS_CREATE_FILE_SUCCESS)
        .withLatestFrom(this.store.select('path'))
        .map(([_, path]) => new FetchItems(path));
}
