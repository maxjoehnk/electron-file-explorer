import {
    All as Action
} from '../actions';
import { PATH_NAVIGATE } from '../actions/path';
import { HISTORY_FORWARD, HISTORY_BACK } from '../actions/history';

const initial: IHistoryState = {
    current: 0,
    paths: []
};

export interface IHistoryState {
    current: number;
    paths: string[];
};

export default (state: IHistoryState = initial, action: Action) => {
    switch (action.type) {
        case PATH_NAVIGATE: {
            if (!(action.meta && action.meta.history)) {
                const history = [...state.paths, action.payload];
                return {
                    paths: history,
                    current: history.length - 1
                };
            }
            return state;
        }
        case HISTORY_BACK:
            return Object.assign({}, state,{
                current: Math.max(state.current - 1, 0)
            });
        case HISTORY_FORWARD:
            return Object.assign({}, state,{
                current: Math.min(state.current + 1, state.paths.length - 1)
            });
        default:
            return state;
    }
};
