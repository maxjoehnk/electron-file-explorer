import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-sidebar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input()
    title: string;

    @Input()
    visible: boolean;

    @Output()
    toggle: EventEmitter<void> = new EventEmitter<void>();

    onToggle() {
        this.toggle.emit();
    }
}
