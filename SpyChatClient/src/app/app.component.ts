import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'spy-chat-app-root',
  template: `<div>
              Spy Chat
              <router-outlet></router-outlet>
            </div>`,
})
export class AppComponent { }