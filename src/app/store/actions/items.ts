import { Action } from '@ngrx/store';

export const ITEMS_FETCH = '[Items] Fetch';
export const ITEMS_FETCH_SUCCESS = '[Items] Fetch Success';
export const ITEMS_CREATE_FILE = '[Items] Create File';
export const ITEMS_CREATE_FILE_SUCCESS = '[Items] Create File Success';
export const ITEMS_CREATE_FILE_ERROR = '[Items] Create File Error';

export class FetchItems implements Action {
    readonly type = ITEMS_FETCH;

    constructor(public payload: string) {}
}

export class FetchItemsSuccess implements Action {
    readonly type = ITEMS_FETCH_SUCCESS;

    constructor(public payload: any[]) {}
}

export class CreateFile implements Action {
    readonly type = ITEMS_CREATE_FILE;
    public payload: any;

    constructor(path: string, filename: string) {
        this.payload = {
            path,
            filename
        };
    }
}

export class CreateFileSuccess implements Action {
    readonly type = ITEMS_CREATE_FILE_SUCCESS;
}

export type All =
    FetchItems |
    FetchItemsSuccess |
    CreateFile |
    CreateFileSuccess;
