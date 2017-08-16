import { Action } from '@ngrx/store';

export const PATH_NAVIGATE = '[Path] Navigate';

export interface NavigateMeta {
    history?: boolean;
}

export class Navigate implements Action {
    readonly type = PATH_NAVIGATE;

    constructor(public payload: string, public meta?: NavigateMeta) {}
}

export type All =
    Navigate;
