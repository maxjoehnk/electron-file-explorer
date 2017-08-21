import {Injectable, Type} from '@angular/core';
import {ImagePreviewComponent} from './image/image.component';
import {VideoPreviewComponent} from './video/video.component';

@Injectable()
export class PreviewService {
    getComponentFromFile({mimetype}): Type<any> {
        if (/image\/.*/.test(mimetype)) {
            return ImagePreviewComponent;
        }else if (/video\/.*/.test(mimetype)) {
            return VideoPreviewComponent;
        }
        return null;
    }
}
