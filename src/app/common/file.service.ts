import {Injectable} from '@angular/core';

export const IMAGE_VIEWER = 'image';
export const VIDEO_VIEWER = 'video';

const imageBlacklist = [
    'image/vnd.adobe.photoshop'
];

@Injectable()
export class FileService {

    getViewerType({mimetype}): string {
        if (/image\/.*/.test(mimetype) &&
            !imageBlacklist.includes(mimetype)) {
            return IMAGE_VIEWER;
        } else if (/video\/.*/.test(mimetype)) {
            return VIDEO_VIEWER;
        }
        return null;
    }

    hasInternalViewer(file): boolean {
        return !!this.getViewerType(file);
    }
}
