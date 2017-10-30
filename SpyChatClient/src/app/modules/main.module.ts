import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { MainComponent } from './main.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
    declarations: [
        MainComponent,
        ChatComponent,
    ],
    exports: [
        MainComponent,
    ],
})
export class MainModule { }