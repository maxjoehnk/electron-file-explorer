import {Injectable, Type} from '@angular/core';
import {ImagePreviewComponent} from './image/image.component';
import {VideoPreviewComponent} from './video/video.component';
import {IconPreviewComponent} from './icon/icon.component';
import {FileService, IMAGE_VIEWER, VIDEO_VIEWER} from '../common/file.service';

@Injectable()
export class PreviewService {

    constructor(private file: FileService) {}

    getComponentFromFile(file): Type<any> {
        switch (this.file.getViewerType(file)) {
            case IMAGE_VIEWER:
                return ImagePreviewComponent;
            case VIDEO_VIEWER:
                return VideoPreviewComponent;
            default:
                return IconPreviewComponent;
        }
    }
}
