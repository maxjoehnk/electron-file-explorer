import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewerDialogComponent} from './dialog/dialog.component';
import {ImageViewerComponent} from './image/image.component';
import {VideoViewerComponent} from './video/video.component';
import {MdDialogModule} from '@angular/material';
import {ViewerService} from './viewer.service';
import {ViewerDirective} from './viewer.directive';
import {ViewerContainerComponent} from './container/container.component';
import {FileExplorerCommonModule} from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        MdDialogModule,
        FileExplorerCommonModule
    ],
    declarations: [
        ViewerDialogComponent,
        ImageViewerComponent,
        VideoViewerComponent,
        ViewerDirective,
        ViewerContainerComponent
    ],
    providers: [
        ViewerService
    ],
    entryComponents: [
        ViewerDialogComponent,
        ImageViewerComponent,
        VideoViewerComponent
    ]
})
export class ViewerModule {
}
