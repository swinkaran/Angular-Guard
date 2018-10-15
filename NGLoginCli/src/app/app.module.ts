import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { routing } from './app.routing';
import { AuthenticationService } from './_services';
import { SignInFormComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [AuthenticationService,],
  bootstrap: [AppComponent, LoginComponent, ListComponent]
})
export class AppModule { }
