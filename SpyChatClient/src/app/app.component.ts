import { Component } from '@angular/core';
import { MenuItem } from './shared/model';

@Component({
  selector: 'spy-chat-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  menu: MenuItem[] = [];
}
