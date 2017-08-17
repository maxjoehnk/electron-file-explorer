import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';

import {Navigate, PATH_NAVIGATE} from '../actions/path';
import {FetchItems} from '../actions/items';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class PathEffects  {

    constructor(private actions$: Actions) {}

    @Effect()
    items$ = this.actions$
        .ofType<Navigate>(PATH_NAVIGATE)
        .map(({payload}) => new FetchItems(payload));

}
