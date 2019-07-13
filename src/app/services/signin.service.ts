import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private key = 'ux_portal_user';
  private signinSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpService) { }

  getSigninSubject(): BehaviorSubject<User> {
    return this.signinSubject;
  }

  signin(userAsJson: string): Observable<User> {
    return this.http.doPost<User>(HttpService.URL_SIGNIN, userAsJson);
  }

  signout() {
    localStorage.removeItem(this.key);
    this.signinSubject.next(null);

  }

  getToken(): string {
    return this.getUser() != null ? this.getUser().token : null;
  }

  store(userAsJson: string) {
    localStorage.setItem(this.key, userAsJson);
    this.signinSubject.next(this.getUser());
  }

  getUser(): User {
    return localStorage.getItem(this.key) != null ? JSON.parse(localStorage.getItem(this.key)) : null;
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
