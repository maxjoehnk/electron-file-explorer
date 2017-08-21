import {Injectable, Type} from '@angular/core';
import {ImageViewerComponent} from './image/image.component';
import {VideoViewerComponent} from './video/video.component';
import {MdDialog} from '@angular/material';
import {ViewerDialogComponent} from './dialog/dialog.component';
import {FileService, VIDEO_VIEWER, IMAGE_VIEWER} from '../common/file.service';

@Injectable()
export class ViewerService {

    constructor(private dialog: MdDialog,
                private file: FileService) {}

    getComponentFromFile(file: any): Type<any> {
        switch (this.file.getViewerType(file)) {
            case IMAGE_VIEWER:
                return ImageViewerComponent;
            case VIDEO_VIEWER:
                return VideoViewerComponent;
            default:
                return null;
        }
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
