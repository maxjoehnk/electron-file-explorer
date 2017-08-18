import {
    All as Action
} from '../actions';
import {PREVIEW_CLOSE, PREVIEW_OPEN} from '../actions/preview';

const initial: IPreviewState = {
    show: false
};

export interface IPreviewState {
    show: boolean;
    file?: any;
}

export default (state: IPreviewState = initial, action: Action) => {
    switch (action.type) {
        case PREVIEW_OPEN:
            return {
                show: true,
                file: action.payload
            };
        case PREVIEW_CLOSE:
            return {
                show: false
            };
        default:
            return state;
    }
};
