import path, { IPathState } from './reducers/path';
import items, { IItemsState } from './reducers/items';

interface IState {
    path: IPathState;
    items: IItemsState;
}

const reducers = {
    path,
    items
};

export default reducers;

export {
    IState,
    IPathState,
    IItemsState
};
