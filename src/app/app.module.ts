import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule
} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {AppBarComponent} from './frame/app-bar/app-bar.component';
import {NavBarComponent} from './frame/nav-bar/nav-bar.component';
import {BreadcrumbComponent} from './frame/breadcrumb/breadcrumb.component';

import reducers from './store';
import { effects } from './store/effects';

@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        NavBarComponent,
        BreadcrumbComponent
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
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
