import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdDialogModule,
    MdCardModule,
    MdSlideToggleModule,
    MdButtonToggleModule
} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {AppBarComponent} from './frame/app-bar/app-bar.component';
import {NavBarComponent} from './frame/nav-bar/nav-bar.component';
import {BreadcrumbComponent} from './frame/breadcrumb/breadcrumb.component';
import {ViewerModule} from "./viewer/viewer.module";

import reducers from './store';
import { effects } from './store/effects';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavoritesComponent } from './sidebar/favorites/favorites.component';
import { TagsComponent } from './sidebar/tags/tags.component';
import { NetworkComponent } from './sidebar/network/network.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ListComponent } from './explorer/list/list.component';
import { DetailedListComponent } from './explorer/detailed-list/detailed-list.component';
import { TableComponent } from './explorer/table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        NavBarComponent,
        BreadcrumbComponent,
        SettingsComponent,
        SidebarComponent,
        FavoritesComponent,
        TagsComponent,
        NetworkComponent,
        ExplorerComponent,
        ListComponent,
        DetailedListComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdDialogModule,
        MdSlideToggleModule,
        MdCardModule,
        MdButtonToggleModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        ViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        SettingsComponent
    ]
})
export class AppModule {
}
