import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class AuthenticationService {
  private user: User;
  
  login(username: string, password: string) {
    ////return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
    //return this.http.post<any>(`localhost:4444/users/authenticate`, { username: username, password: password })
    //  .pipe(map(user => {
    //    // login successful if there's a jwt token in the response
    //    if (user && user.token) {
    //      // store user details and jwt token in local storage to keep user logged in between page refreshes
    //      localStorage.setItem('currentUser', JSON.stringify(user));
    //    }

    //    return user;
    //  }));

    this.user = new User();
    this.user.firstName = 'srikaran';
    this.user.id = 8855;
    this.user.lastName = 'n';
    this.user.username = 'srikarann';

    return this.user;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
