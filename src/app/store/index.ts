import path, { IPathState } from './reducers/path';
import items, { IItemsState } from './reducers/items';
import favorites, { IFavoritesState } from './reducers/favorites'
import network, { INetworkState } from './reducers/network';
import tags, { ITagState } from './reducers/tags';
import history, { IHistoryState } from './reducers/history';
import devices, { IDevicesState } from './reducers/devices';
import preview, { IPreviewState } from './reducers/preview';

interface IState {
    path: IPathState;
    items: IItemsState;
    favorites: IFavoritesState;
    network: INetworkState;
    tags: ITagState;
    history: IHistoryState;
    devices: IDevicesState;
    preview: IPreviewState;
}

const reducers = {
    path,
    items,
    favorites,
    network,
    tags,
    history,
    devices,
    preview
};

export default reducers;

export {
    IState,
    IPathState,
    IItemsState,
    IFavoritesState,
    INetworkState,
    ITagState,
    IHistoryState,
    IDevicesState,
    IPreviewState
};
