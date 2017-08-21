import {Injectable, Type} from '@angular/core';
import {ImageViewerComponent} from './image/image.component';
import {VideoViewerComponent} from './video/video.component';
import {MdDialog} from '@angular/material';
import {ViewerDialogComponent} from './dialog/dialog.component';

const IMAGE_VIEWER = 'image';
const VIDEO_VIEWER = 'video';

@Injectable()
export class ViewerService {

    constructor(private dialog: MdDialog) {}

    getComponentFromFile(file: any): Type<any> {
        switch (this.getViewerType(file)) {
            case IMAGE_VIEWER:
                return ImageViewerComponent;
            case VIDEO_VIEWER:
                return VideoViewerComponent;
            default:
                return null;
        }
    }

    hasInternalViewer(file): boolean {
        return !!this.getViewerType(file);
    }

    private getViewerType({mimetype}): string {
        if (/image\/.*/.test(mimetype)) {
            return IMAGE_VIEWER;
        } else if (/video\/.*/.test(mimetype)) {
            return VIDEO_VIEWER;
        }
        return null;
    }

    openInModal(file) {
        this.dialog.open(ViewerDialogComponent, {
            data: file
        });
    }

    openInPopup(file) {
        throw new Error('NotImplemented');
    }
}
