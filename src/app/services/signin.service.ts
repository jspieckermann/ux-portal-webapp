import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private key = 'ux_portal_user';

  constructor(private http: HttpService) { }

  signin(userAsJson: string): Observable<User> {
    return this.http.doPost<User>(HttpService.URL_SIGNIN, userAsJson);
  }

  signout() {
    localStorage.removeItem(this.key);
  }

  getToken(): string {
    const user = this.getUser();
    return user != null ? user.token : null;
  }

  store(userAsJson: string) {
    localStorage.setItem(this.key, userAsJson);
  }

  getUser(): User {
    return localStorage.getItem(this.key) != null ?  JSON.parse(localStorage.getItem(this.key)) : null;
  }

  isSignedIn(user: User): boolean {
    return this.getUser() != null && user != null && this.getUser().email === user.email;
  }

  containsSignedIn(users: User[]) {
    for (const user of users) {
      if (this.getUser() != null && this.getUser().email === user.email) {
        return true;
      }
    }
    return false;
  }

}
