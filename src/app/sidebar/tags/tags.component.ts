import {Component, OnInit} from '@angular/core';
import {IState, ITagState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {FetchTags} from '../../store/actions/tags';

@Component({
    selector: 'app-sidebar-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    visible: boolean = true;
    tags: Observable<ITagState>;

    constructor(private store: Store<IState>) {
    }

    ngOnInit() {
        this.tags = this.store.select('tags');
        this.store.dispatch(new FetchTags());
    }

    open() {
        
    }

    onToggle() {
        this.visible = !this.visible;
    }

}
