import {Action} from '@ngrx/store';
import {ITagState} from '../reducers/tags';

export const TAGS_FETCH = '[Tags] Fetch';
export const TAGS_FETCH_SUCCESS = '[Tags] Fetch Success';

export class FetchTags implements Action {
    readonly type = TAGS_FETCH;
}

export class FetchTagsSuccess implements Action {
    readonly type = TAGS_FETCH_SUCCESS;

    constructor(public payload: ITagState) {
    }
}

export type All =
    FetchTags |
    FetchTagsSuccess;
