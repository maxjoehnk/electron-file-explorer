import { Action } from '@ngrx/store';
import {IFavoritesState} from '../reducers/favorites';

export const FAVORITES_FETCH = '[Favorites] Fetch';
export const FAVORITES_FETCH_SUCCESS = '[Favorites] Fetch Success';

export class FetchFavorites implements Action {
    readonly type = FAVORITES_FETCH;
}

export class FetchFavoritesSuccess implements Action {
    readonly type = FAVORITES_FETCH_SUCCESS;

    constructor(public payload: IFavoritesState) {}
}

export type All =
    FetchFavorites |
    FetchFavoritesSuccess;
