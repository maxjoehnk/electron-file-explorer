import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    viewMode = 'list';

    constructor(private iconRegistry: MdIconRegistry) {
        iconRegistry.setDefaultFontSetClass('mdi');
    }

    changeViewMode(mode) {
        this.viewMode = mode;
    }

}
