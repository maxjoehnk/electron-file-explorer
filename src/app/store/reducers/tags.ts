import {
    All as Action
} from '../actions/items';
import {ITEMS_FETCH_SUCCESS} from '../actions/items';

const initial: ITagState = [
    {
        label: 'University',
        color: '#FF5722'
    }
];

export type ITagState = ITag[];

export type ITag = {
    label: string;
    color: string;
}

export default (state: ITagState = initial, action: Action) => {
    return state;
};
