import {
    All as Action
} from '../actions';
import {FAVORITES_FETCH_SUCCESS} from '../actions/favorites';

const initial: IFavoritesState = [];

export type IFavoritesState = IFavorite[];

export interface IFavorite {
    label: string;
    path: string;
    icon?: string;
}

export default (state: IFavoritesState = initial, action: Action) => {
    switch (action.type) {
        case FAVORITES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
