import {
    All as Action
} from '../actions/items';
import { ITEMS_FETCH_SUCCESS } from '../actions/items';

const initial: IItemsState = [];

export type IItemsState = any[];

export default (state: IItemsState = initial, action: Action) => {
    switch (action.type) {
        case ITEMS_FETCH_SUCCESS:
            return action.payload;
    }
    return state;
};
