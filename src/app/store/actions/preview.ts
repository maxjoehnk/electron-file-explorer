import {Action} from '@ngrx/store';
import {IDevicesState} from '../reducers/devices';

export const PREVIEW_OPEN = '[Preview] Open';
export const PREVIEW_CLOSE = '[Preview] Close';

export class OpenPreview implements Action {
    readonly type = PREVIEW_OPEN;

    constructor(public payload: any) {}
}

export class ClosePreview implements Action {
    readonly type = PREVIEW_CLOSE;
}

export type All =
    OpenPreview |
    ClosePreview;
