import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, concat } from 'rxjs';
import { retry, catchError, retryWhen, delay, take, concatMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private snackbar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(3),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    errorMessage = 'Error: ' + error.error.message;
                } else {
                    errorMessage = 'Error code: ' + error.status + ' Message: ' + error.error.message;
                }
                this.snackbar.open(errorMessage, '', { duration: 3000 });
                return throwError(errorMessage);
            })
        )
    }
}
