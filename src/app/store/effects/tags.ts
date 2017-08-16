import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {ipcRenderer} from 'electron';

import {IState} from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {FetchTags, FetchTagsSuccess, TAGS_FETCH} from '../actions/tags';

@Injectable()
export class TagEffects {

    constructor(private actions$: Actions,
                private store: Store<IState>) {
        ipcRenderer.on('FETCH_TAGS_SUCCESS', (event, items) => {
            store.dispatch(new FetchTagsSuccess(items));
        });
    }

    @Effect({dispatch: false})
    fetch$ = this.actions$
        .ofType<FetchTags>(TAGS_FETCH)
        .do(() => ipcRenderer.send('FETCH_TAGS'));
}
