import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninService } from '../core/services/signin.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private signinService: SigninService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.signinService.getToken() != null) {
            const modified = request.clone({ setHeaders: { Authorization: 'Bearer ' + this.signinService.getToken()} });
            return next.handle(modified);
        } else {
            return next.handle(request);
        }
    }
}
