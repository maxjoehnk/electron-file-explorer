import {
    All as Action
} from '../actions/items';

const initial: IFavoritesState = [
    {
        label: 'Applications',
        icon: 'mdi-apps',
        path: '/Applications'
    },
    {
        label: 'Google Drive',
        icon: 'mdi-google-drive',
        path: '/Users/max/Google Drive'
    },
    {
        label: 'Desktop',
        path: '/Users/max/Desktop'
    },
    {
        label: 'Documents',
        icon: 'mdi-file-multiple',
        path: '/Users/max/Documents'
    },
    {
        label: 'Downloads',
        icon: 'mdi-cloud-download',
        path: '/Users/max/Downloads'
    },
    {
        label: 'max',
        icon: 'mdi-home',
        path: '/Users/max'
    },
    {
        label: 'Code',
        path: '/Users/max/Documents/Code'
    },
    {
        label: 'Library',
        path: '/Users/max/Music/Traktor/Library'
    }
];

export type IFavoritesState = IFavorite[];

export type IFavorite = {
    label: string;
    path: string;
    icon?: string;
}

export default (state: IFavoritesState = initial, action: Action) => {
    return state;
};
