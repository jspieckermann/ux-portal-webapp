import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { RoutingService } from '../services/routing.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private signinService: SigninService, private routingService: RoutingService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.signinService.getUser() != null) {
      return true;
    }
    this.routingService.routeToSignin();
    return false;
  }

}
