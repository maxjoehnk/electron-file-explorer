import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { remote } from 'electron';

const { getCurrentWindow } = remote;

import { WINDOW_MINIMIZE, WINDOW_CLOSE, WINDOW_MAXIMIZE } from '../actions/window';

@Injectable()
export class WindowEffects {

    @Effect({ dispatch: false })
    close$ = this.actions$
        .ofType(WINDOW_CLOSE)
        .do(() => getCurrentWindow().close());

    @Effect({ dispatch: false })
    minimize$ = this.actions$
        .ofType(WINDOW_MINIMIZE)
        .do(() => getCurrentWindow().minimize());

    @Effect({ dispatch: false })
    maximize$ = this.actions$
        .ofType(WINDOW_MAXIMIZE)
        .do(() => getCurrentWindow().isMaximized() ?
            getCurrentWindow().unmaximize() :
            getCurrentWindow().maximize());

    constructor(
        private actions$: Actions
    ) { }
}
