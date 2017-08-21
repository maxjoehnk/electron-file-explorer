import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ClosePreview} from '../store/actions/preview';
import {IState} from '../store/index';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

    @Input()
    file;

    constructor(private store: Store<IState>) {}

    close() {
        this.store.dispatch(new ClosePreview());
    }
}
