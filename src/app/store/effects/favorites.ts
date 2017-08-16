import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {ipcRenderer} from 'electron';

import {IState} from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {FAVORITES_FETCH, FetchFavorites, FetchFavoritesSuccess} from '../actions/favorites';

@Injectable()
export class FavoriteEffects {

    constructor(private actions$: Actions,
                private store: Store<IState>) {
        ipcRenderer.on('FETCH_FAVORITES_SUCCESS', (event, items) => {
            store.dispatch(new FetchFavoritesSuccess(items));
        });
    }

    @Effect({dispatch: false})
    fetch$ = this.actions$
        .ofType<FetchFavorites>(FAVORITES_FETCH)
        .do(() => ipcRenderer.send('FETCH_FAVORITES'));
}
