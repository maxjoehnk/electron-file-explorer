import {Component, OnInit} from '@angular/core';
import {IState, ITagState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-sidebar-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    tags: Observable<ITagState>

    constructor(private store: Store<IState>) {
    }

    ngOnInit() {
        this.tags = this.store.select('tags');
    }

}
