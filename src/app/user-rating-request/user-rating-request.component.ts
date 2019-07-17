import { Component, OnInit } from '@angular/core';
import { Feedback } from '../shared/model/Feedback';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../core/services/feedback.service';
import { RoutingService } from '../core/services/routing.service';


@Component({
  selector: 'app-user-rating-request',
  templateUrl: './user-rating-request.component.html',
  styleUrls: ['./user-rating-request.component.css']
})
export class UserRatingRequestComponent implements OnInit {

  id: number;
  feedbackRequests: Feedback[];

  constructor(private activeRoute: ActivatedRoute, private feedbackService: FeedbackService, private routingService: RoutingService) { }

  ngOnInit() {
    const routeParameter = 'id';
    this.activeRoute.params.subscribe(params => this.id = parseInt(params[routeParameter], 10));
    this.update();
  }

  private update() {
    this.feedbackService.getFeedbackRequests(this.id).subscribe(
      data => {
        console.log('Feedback request SUCCESSFUL: ', JSON.stringify(data));
        this.feedbackRequests = data;
        if (this.feedbackRequests.length === 0) {
          this.routingService.routeToHome();
        }
      },
      error => {console.log('Feedback request FAILED: ', error.status); }
    );
  }

  onSubmitFeedback(feedback: Feedback) {
    this.feedbackService.submitFeedback(JSON.stringify(feedback)).subscribe(
      data => {
        console.log('Submit feedback SUCCESSFUL: ', JSON.stringify(data));
        this.update();
      },
      error => {console.log('Submit feedback FAILED: ', error.status); }
    );
  }

}
