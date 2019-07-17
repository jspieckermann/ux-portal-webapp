import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './shared/model/User';
import { SigninService } from './core/services/signin.service';
import { RoutingService } from './core/services/routing.service';
import { FeedbackService } from './core/services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  numOfFeedbackRequests: number;
  feedbackRequestSubscription: Subscription;
  signinSubscription: Subscription;

  constructor(private signinService: SigninService, private routingService: RoutingService,
              private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackRequestSubscription = this.feedbackService.feedbackRequestForSubject().subscribe(userIds => {
      if (userIds.filter(id => this.signinService.getUser() != null &&
        id === this.signinService.getUser().id).length > 0) {
        this.retrieveFeedbackRequests();
      }
    });
    this.signinSubscription = this.signinService.getSigninSubject().subscribe(user => {
      user != null ? this.retrieveFeedbackRequests() : this.numOfFeedbackRequests = 0;
    });
    if (this.currentUser() != null) {
      this.retrieveFeedbackRequests();
    }
  }

  private retrieveFeedbackRequests() {
    this.feedbackService.getFeedbackRequests(this.signinService.getUser().id).subscribe(
      requests => {
        this.numOfFeedbackRequests = requests.length;
        console.log('User feedback request retrieval SUCCESSFUL: ', JSON.stringify(requests));
      },
      error => {console.log('User feedback request retrieval FAILED: ', error.status); }
    );
  }

  ngOnDestroy(): void {
    this.feedbackRequestSubscription.unsubscribe();
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
