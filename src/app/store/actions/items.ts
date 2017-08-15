import { Action } from '@ngrx/store';

export const ITEMS_FETCH = '[Items] Fetch';
export const ITEMS_FETCH_SUCCESS = '[Items] Fetch Success';

export class FetchItems implements Action {
    readonly type = ITEMS_FETCH;

    constructor(public payload: string) {}
}

export class FetchItemsSuccess implements Action {
    readonly type = ITEMS_FETCH_SUCCESS;

    constructor(public payload: any[]) {}
}

export type All =
    FetchItems |
    FetchItemsSuccess;
