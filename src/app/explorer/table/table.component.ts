import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    dataSource: TableSource = new TableSource();
    columns = ['filename', 'modifiedDate'];

    @Input()
    set items(items: any[]) {
        this.dataSource.set(items);
    }

    constructor() {
    }

    ngOnInit() {
    }
}

export class TableSource extends DataSource<any> {

    items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    set (items) {
        this.items.next(items);
    }

    connect(): Observable<any[]> {
        return this.items;
    }

    disconnect() {
    }
}
