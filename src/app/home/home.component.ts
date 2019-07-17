import { Component } from '@angular/core';
import { SigninService } from '../core/services/signin.service';
import { RoutingService } from '../core/services/routing.service';
import { User } from '../shared/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private signinService: SigninService, private routingService: RoutingService) { }

  currentUser(): User {
    return this.signinService.getUser();
  }

  signout() {
    this.signinService.signout();
  }

  routeToProjectOverview() {
    this.routingService.routeToProjectOverview();
  }

  routeToSignin() {
    this.routingService.routeToSignin();
  }

  routeToProjectCreate() {
    this.routingService.routeToProjectCreate();
  }

  routeToRegister() {
    this.routingService.routeToRegister();
  }

}

