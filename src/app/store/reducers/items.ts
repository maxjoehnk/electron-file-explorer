import {
    All as Action, ITEMS_CREATE_FILE
} from '../actions/items';
import { ITEMS_FETCH_SUCCESS } from '../actions/items';

const initial: IItemsState = [];

export type IItemsState = any[];

export default (state: IItemsState = initial, action: Action) => {
    switch (action.type) {
        case ITEMS_FETCH_SUCCESS:
            return action.payload;
        case ITEMS_CREATE_FILE:
            return [...state, { filename: action.payload.filename }];
        default:
            return state;
    }
};
