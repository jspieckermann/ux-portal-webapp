import { Component } from '@angular/core';
import { SigninService } from './services/signin.service';
import { RoutingService } from './services/routing.service';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private signinService: SigninService, private routingService: RoutingService) { }

  currentUser(): User {
    return this.signinService.getUser();
  }

  signout() {
    this.signinService.signout();
    this.routingService.routeToHome();
  }

  routeToSignin() {
    this.routingService.routeToSignin();
  }

  routeToRegister() {
    this.routingService.routeToRegister();
  }

}
