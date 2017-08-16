import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IState, INetworkState} from '../../store';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-sidebar-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

    visible: boolean = true;
    devices: Observable<INetworkState>;

    constructor(private store: Store<IState>) {
    }

    ngOnInit() {
        this.devices = this.store.select('network');
    }

    navigate() {

    }

    onToggle() {
        this.visible = !this.visible;
    }

}
