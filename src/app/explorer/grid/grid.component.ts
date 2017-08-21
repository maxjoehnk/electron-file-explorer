import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fe-grid-view',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {

    @Input()
    items: any[];

    @Output()
    open: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    preview: EventEmitter<any> = new EventEmitter<any>();

    onClick(item) {
        this.preview.emit(item);
    }

    onDblClick(item) {
        this.open.emit(item);
    }
}
