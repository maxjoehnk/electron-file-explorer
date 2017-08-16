import {
    All as Action
} from '../actions';
import {TAGS_FETCH_SUCCESS} from '../actions/tags';

const initial: ITagState = [];

export type ITagState = ITag[];

export type ITag = {
    label: string;
    color: string;
}

export default (state: ITagState = initial, action: Action) => {
    switch (action.type) {
        case TAGS_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
