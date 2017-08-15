import { Action } from '@ngrx/store';

export const PATH_NAVIGATE = '[Path] Navigate';

export class Navigate implements Action {
    readonly type = PATH_NAVIGATE;

    constructor(public payload: string) {}
}

export type All =
    Navigate;
