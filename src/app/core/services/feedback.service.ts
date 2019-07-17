import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Feedback } from 'src/app/shared/model/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbackRequestFor: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  private source: EventSource;

  constructor(private http: HttpService) {
    this.source = new EventSource(HttpService.URL_USERS_FEEDBACK_REQUEST_REGISTER);
    this.source.addEventListener('message', message => {
      this.feedbackRequestFor.next(JSON.parse(message.data));
    });
  }

  feedbackRequestForSubject(): BehaviorSubject<number[]> {
    return this.feedbackRequestFor;
  }

  getFeedbackRequests(uid: number): Observable<Feedback[]> {
    return this.http.doGet<Feedback[]>(HttpService.URL_USERS + '/' + uid + HttpService.URL_EXTENSION_FEEDBACK_REQUESTS);
  }

  getFeedback(uid: number): Observable<Feedback[]> {
    return this.http.doGet<Feedback[]>(HttpService.URL_USERS + '/' + uid + HttpService.URL_EXTENSION_FEEDBACK);
  }

  submitFeedback(feedback: string): Observable<Feedback> {
    return this.http.doPost<Feedback>(HttpService.URL_USERS_FEEDBACK, feedback);
  }

}
