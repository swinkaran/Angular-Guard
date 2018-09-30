import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { routing } from './app.routing';
import { AuthenticationService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent, LoginComponent, ListComponent]
})
export class AppModule { }
