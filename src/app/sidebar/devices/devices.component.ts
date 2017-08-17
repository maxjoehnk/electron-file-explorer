import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Navigate} from '../../store/actions/path';
import {IState} from '../../store/index';
import {Observable} from 'rxjs/Observable';
import {IDevice} from '../../store/reducers/devices';
import {FetchDevices} from '../../store/actions/devices';

@Component({
    selector: 'app-sidebar-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

    devices: Observable<IDevice[]>;
    visible: boolean = true;

    constructor(private store: Store<IState>) {}

    ngOnInit() {
        this.devices = this.store.select('devices');
        this.store.dispatch(new FetchDevices());
    }

    navigate(path: string) {
        this.store.dispatch(new Navigate(path));
    }

    onToggle() {
        this.visible = !this.visible;
    }

}
