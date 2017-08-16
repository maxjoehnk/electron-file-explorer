import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MdDialog} from '@angular/material';
import {SettingsComponent} from '../../settings/settings.component';
import {Store} from "@ngrx/store";
import {IState} from '../../store';
import {HistoryBack, HistoryForward} from '../../store/actions/history';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @ViewChild('group')
    modeSelector;

    @Output()
    viewMode: EventEmitter<string> = new EventEmitter<string>();

    constructor(private dialog: MdDialog,
                private store: Store<IState>) {
    }

    ngOnInit() {
        this.modeSelector.value = 'list';
        this.viewMode.emit('list');
    }

    openSettings() {
        this.dialog.open(SettingsComponent, {
            width: '100vh',
            height: '90vh'
        });
    }

    navigateBack() {
        this.store.dispatch(new HistoryBack());
    }

    navigateForward() {
        this.store.dispatch(new HistoryForward());
    }

    changeViewMode(mode) {
        this.viewMode.emit(mode.value);
    }

}
