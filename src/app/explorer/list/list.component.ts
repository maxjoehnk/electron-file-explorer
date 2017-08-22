import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    @Input()
    items: any[];

    @Output()
    open: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    preview: EventEmitter<any> = new EventEmitter<any>();

    @ViewChildren(MdMenuTrigger)
    trigger: QueryList<MdMenuTrigger>;

    onClick(item) {
        this.preview.emit(item);
    }

    onDblClick(item) {
        this.open.emit(item);
    }

    onRightClick(item, i) {
        const trigger = this.trigger.find((item, index) => index === i);
        trigger.openMenu();
    }
}
