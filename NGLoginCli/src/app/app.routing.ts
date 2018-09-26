import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
//import { RegisterComponent } from './register';
//import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'app', component: AppComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
