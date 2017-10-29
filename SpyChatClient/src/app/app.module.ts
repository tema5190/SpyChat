import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: '/login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true},
    ),
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


