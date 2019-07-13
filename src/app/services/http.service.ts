import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public static readonly URL_PROJECTS =
    'http://localhost:8080/ux-portal-api/projects';
  public static readonly URL_USERS =
    'http://localhost:8080/ux-portal-api/users';
  public static readonly URL_USERS_FEEDBACK =
    'http://localhost:8080/ux-portal-api/users/feedback';
  public static readonly URL_SIGNIN =
    'http://localhost:8080/ux-portal-api/signin';
  public static readonly URL_EXTENSION_CANDIDATES = '/candidates';
  public static readonly URL_EXTENSION_CONTRACTORS = '/contractors';
  public static readonly URL_EXTENSION_COMPLETE = '/complete';
  public static readonly URL_EXTENSION_FEEDBACK_REQUESTS = '/feedbackRequests';

  constructor(private http: HttpClient) {}

  doDelete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  doPost<T>(url: string, content?: string): Observable<T> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<T>(url, content, { headers });
  }

  doPut<T>(url: string, content: string): Observable<T> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put<T>(url, content, { headers });
  }

  doGet<T>(url: string, parameter?: Map<string, string>): Observable<T> {
    if (parameter == null) {
      return this.http.get<T>(url);
    } else {
      let params = new HttpParams();
      for (const entry of parameter.entries()) {
        params = params.set(entry[0], entry[1]);
      }
      return this.http.get<T>(url, { params });
    }
  }
}
