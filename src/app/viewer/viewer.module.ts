import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video/video.component';
import {DialogComponent} from './dialog/dialog.component';
import {ImageComponent} from './image/image.component';
import {MdDialogModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdDialogModule
    ],
    declarations: [VideoComponent, DialogComponent, ImageComponent],
    entryComponents: [
        DialogComponent
    ]
})
export class ViewerModule {
}
