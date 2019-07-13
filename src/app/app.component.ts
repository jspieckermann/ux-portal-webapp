import { Component, OnInit, OnDestroy } from '@angular/core';
import { SigninService } from './services/signin.service';
import { RoutingService } from './services/routing.service';
import { User } from './model/User';
import { FeedbackService } from './services/feedback.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  countFeedbackRequests: number;
  feedbackSubscription: Subscription;
  signinSubscription: Subscription;

  constructor(private signinService: SigninService, private routingService: RoutingService,
              private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackSubscription = this.feedbackService.getFeedbackSubject().subscribe(feedback => {
      this.countFeedbackRequests = feedback.length;
    });
    this.signinSubscription = this.signinService.getSigninSubject().subscribe(user => {
      if (user != null) {
        this.feedbackService.startTimer(user.id);
      } else {
        this.feedbackService.stopTimer();
        this.countFeedbackRequests = 0;
      }
    });
    if (this.currentUser() != null) {
      this.feedbackService.startTimer(this.currentUser().id);
    }
  }

  ngOnDestroy(): void {
    this.feedbackSubscription.unsubscribe();
    this.signinSubscription.unsubscribe();
  }

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

  routeToFeedback() {
    if (this.currentUser() != null) {
      this.routingService.routeToFeedbackRequests(this.currentUser().id);
    }
  }

}
