import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        MainComponent,
    ],
    exports: [
        MainComponent,
    ],
})
export class MainModule { }