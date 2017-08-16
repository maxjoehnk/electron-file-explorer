import {
    All as Action
} from '../actions/items';

const initial: INetworkState = [
    {
        label: 'MaksBook-Air',
        icon: 'mdi-desktop-mac',
        path: '//MaksBook-Air.local'
    }
];

export type INetworkState = INetworkDevice[];

export type INetworkDevice = {
    label: string;
    path: string;
    icon?: string;
}

export default (state: INetworkState = initial, action: Action) => {
    return state;
};
