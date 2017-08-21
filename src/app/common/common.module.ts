import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileService} from './file.service';
import {BytesPipe} from './bytes.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BytesPipe
    ],
    exports: [
        BytesPipe
    ],
    providers: [
        FileService
    ]
})
export class FileExplorerCommonModule {
}
