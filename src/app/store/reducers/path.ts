import {
    All as Action
} from '../actions/path';
import { PATH_NAVIGATE } from '../actions/path';

const initial: IPathState = '';

export type IPathState = string;

export default (state: IPathState = initial, action: Action) => {
    switch (action.type) {
        case PATH_NAVIGATE:
            return action.payload;
    }
    return state;
};
