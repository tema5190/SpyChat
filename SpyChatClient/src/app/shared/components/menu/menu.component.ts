import { MenuItem } from '../../model';
import { Component } from '@angular/core';

@Component({
    selector: 'spy-chat-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
})
export class MenuComponent {
    items: MenuItem[];

    constructor() {
        this.items = [];
        this.items.push(
            {title: 'test', route: 'test', subItems: []},
            {title: 'contacts', route: 'contacts', subItems: []},
            {title: 'contacts2', route: 'contacts', subItems: []},
            {title: 'contacts3', route: 'contacts', subItems: []},
            {title: 'contacts4', route: 'contacts', subItems: []},
            {title: 'contacts5', route: 'contacts', subItems: []},
        );
    }
}
