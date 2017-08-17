import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {ipcRenderer} from 'electron';

import {IState} from '../index';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {DEVICES_FETCH, FetchDevices, FetchDevicesSuccess} from '../actions/devices';

@Injectable()
export class DeviceEffects {

    constructor(private actions$: Actions,
                private store: Store<IState>) {
        ipcRenderer.on('FETCH_DEVICES_SUCCESS', (event, items) => {
            store.dispatch(new FetchDevicesSuccess(items));
        });
    }

    @Effect({dispatch: false})
    fetch$ = this.actions$
        .ofType<FetchDevices>(DEVICES_FETCH)
        .do(() => ipcRenderer.send('FETCH_DEVICES'));
}
