import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Navigate} from '../../store/actions/path';
import {IState} from '../../store/index';
import {Observable} from 'rxjs/Observable';
import {IFavorite} from '../../store/reducers/favorites';
import {FetchFavorites} from '../../store/actions/favorites';

@Component({
    selector: 'app-sidebar-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    favorites: Observable<IFavorite[]>;
    visible: boolean = true;

    constructor(private store: Store<IState>) {}

    ngOnInit() {
        this.favorites = this.store.select('favorites');
        this.store.dispatch(new FetchFavorites());
    }

    navigate(path: string) {
        this.store.dispatch(new Navigate(path));
    }

    onToggle() {
        this.visible = !this.visible;
    }

}
