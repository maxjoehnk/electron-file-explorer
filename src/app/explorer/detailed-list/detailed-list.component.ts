import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss']
})
export class DetailedListComponent implements OnInit {

    @Input()
    items: any[];

    @Output()
    open: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    preview: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item) {
        this.preview.emit(item);
    }

    onDblClick(item) {
        this.open.emit(item);
    }
}
