import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import {Injectable} from '@angular/core';

import {Navigate} from '../actions/path';
import {All, HISTORY_BACK, HISTORY_FORWARD} from '../actions/history';
import {IState} from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class HistoryEffects {

    constructor(private actions$: Actions,
                private store$: Store<IState>) {}

    @Effect()
    items$ = this.actions$
        .ofType<All>(HISTORY_BACK, HISTORY_FORWARD)
        .withLatestFrom(this.store$.select(state => state.history))
        .map(([action, state]) => new Navigate(state.paths[state.current], { history: true }));

}
