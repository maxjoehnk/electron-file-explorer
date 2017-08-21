import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MdIconModule, MdButtonModule} from '@angular/material';
import {PreviewService} from './preview.service';
import {PreviewDirective} from './preview.directive';
import {PreviewContainerComponent} from './container/container.component';
import {ImagePreviewComponent} from './image/image.component';
import {VideoPreviewComponent} from './video/video.component';
import {IconPreviewComponent} from './icon/icon.component';
import {FileExplorerCommonModule} from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdIconModule,
        MdButtonModule,
        FileExplorerCommonModule
    ],
    declarations: [
        PreviewDirective,
        PreviewContainerComponent,
        ImagePreviewComponent,
        VideoPreviewComponent,
        IconPreviewComponent
    ],
    exports: [
        PreviewContainerComponent
    ],
    providers: [
        PreviewService
    ],
    entryComponents: [
        ImagePreviewComponent,
        VideoPreviewComponent,
        IconPreviewComponent
    ]
})
export class PreviewModule {
}
