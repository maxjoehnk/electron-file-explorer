import {Action} from '@ngrx/store';
import {IDevicesState} from '../reducers/devices';

export const DEVICES_FETCH = '[Devices] Fetch';
export const DEVICES_FETCH_SUCCESS = '[Devices] Fetch Success';

export class FetchDevices implements Action {
    readonly type = DEVICES_FETCH;
}

export class FetchDevicesSuccess implements Action {
    readonly type = DEVICES_FETCH_SUCCESS;

    constructor(public payload: IDevicesState) {
    }
}

export type All =
    FetchDevices |
    FetchDevicesSuccess;
