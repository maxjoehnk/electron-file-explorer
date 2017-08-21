import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
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
    MdButtonToggleModule,
    MdInputModule,
    MdTableModule,
    MdGridListModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {AppBarComponent} from './frame/app-bar/app-bar.component';
import {NavBarComponent} from './frame/nav-bar/nav-bar.component';
import {BreadcrumbComponent} from './frame/breadcrumb/breadcrumb.component';
import {ViewerModule} from './viewer/viewer.module';
import {PreviewModule} from './preview/preview.module';

import reducers from './store';
import {effects} from './store/effects';
import {SettingsComponent} from './settings/settings.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FavoritesComponent} from './sidebar/favorites/favorites.component';
import {DevicesComponent} from './sidebar/devices/devices.component';
import {TagsComponent} from './sidebar/tags/tags.component';
import {NetworkComponent} from './sidebar/network/network.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {ListComponent} from './explorer/list/list.component';
import {DetailedListComponent} from './explorer/detailed-list/detailed-list.component';
import {TableComponent} from './explorer/table/table.component';
import {HeaderComponent} from './sidebar/header/header.component';
import {FileComponent} from './create/file/file.component';
import {DetailsComponent} from './details/details.component';
import {GridComponent} from './explorer/grid/grid.component';
import {FileExplorerCommonModule} from './common/common.module';
import {environment} from '../environments/environment';

const devModules = [];
if (!environment.production) {
    devModules.push(StoreDevtoolsModule.instrument({
        maxAge: 25
    }));
}

@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        NavBarComponent,
        BreadcrumbComponent,
        SettingsComponent,
        SidebarComponent,
        FavoritesComponent,
        DevicesComponent,
        TagsComponent,
        NetworkComponent,
        ExplorerComponent,
        ListComponent,
        DetailedListComponent,
        TableComponent,
        HeaderComponent,
        FileComponent,
        DetailsComponent,
        GridComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
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
        MdInputModule,
        MdTableModule,
        MdGridListModule,
        CdkTableModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        ViewerModule,
        PreviewModule,
        FileExplorerCommonModule,
        ...devModules
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        SettingsComponent,
        FileComponent
    ]
})
export class AppModule {
}
