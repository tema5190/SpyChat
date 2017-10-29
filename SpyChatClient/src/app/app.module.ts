import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MainComponent } from './modules/main.component';
import { MainModule } from './modules/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    // Imports
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


