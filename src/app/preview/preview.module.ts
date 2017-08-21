import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreviewService} from './preview.service';
import {PreviewDirective} from './preview.directive';
import {PreviewContainerComponent} from './container/container.component';
import {ImagePreviewComponent} from './image/image.component';
import {VideoPreviewComponent} from './video/video.component';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        PreviewDirective,
        PreviewContainerComponent,
        ImagePreviewComponent,
        VideoPreviewComponent
    ],
    exports: [
        PreviewContainerComponent
    ],
    providers: [
        PreviewService
    ],
    entryComponents: [
        ImagePreviewComponent,
        VideoPreviewComponent
    ]
})
export class PreviewModule {
}
