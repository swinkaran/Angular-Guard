import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './signin/signin.component';
//import { RegisterComponent } from './register';
//import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'listing', component: ListComponent },
  { path: 'app', component: AppComponent },
  { path: 'signin', component: SignInFormComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: "login"}
];

export const routing = RouterModule.forRoot(appRoutes);
