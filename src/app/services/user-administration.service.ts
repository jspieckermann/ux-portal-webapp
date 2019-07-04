import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserAdministrationService {

  constructor(private http: HttpService) { }

  createUser(userAsJson: string): Observable<User> {
    return this.http.doPost<User>(HttpService.URL_USERS, userAsJson);
  }

}
