import {
    All as Action
} from '../actions';
import {DEVICES_FETCH_SUCCESS} from '../actions/devices';

const initial: IDevicesState = [];

export type IDevicesState = IDevice[];

export interface IDevice {
    name: string;
    type: string;
    fstype: string;
    mount: string;
    size: number;
    physical: string;
    uuid: string;
    label: string;
    model?: string;
    serial?: string;
    removable: boolean;
    protocol?: string;
}

export default (state: IDevicesState = initial, action: Action) => {
    switch (action.type) {
        case DEVICES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
