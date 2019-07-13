import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feedback } from '../model/Feedback';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private readonly ms = 60000 * 5;
  private feedbackSubject: BehaviorSubject<Feedback[]> = new BehaviorSubject<Feedback[]>([]);
  private timer: any;

  constructor(private http: HttpService) { }

  getFeedbackSubject(): BehaviorSubject<Feedback[]> {
    return this.feedbackSubject;
  }

  public startTimer(uid: number) {
    this.notifyObservers(uid);
    this.timer = setInterval(() => { this.notifyObservers(uid); }, this.ms);
  }

  public stopTimer() {
    clearInterval(this.timer);
  }

  public triggerNotification(uid: number) {
    this.stopTimer();
    this.startTimer(uid);
  }

  private notifyObservers(uid: number) {
    this.getFeedbackRequests(uid).subscribe(
      data => {
        console.log('Feedback requests retrieval SUCCESSFUL: ', JSON.stringify(data));
        this.feedbackSubject.next(data);
      },
      error => {
        console.log('Feedback requests retrieval FAILED: ', error.status);
        this.feedbackSubject.next([]);
      }
    );
  }

  getFeedbackRequests(uid: number): Observable<Feedback[]> {
    return this.http.doGet<Feedback[]>(HttpService.URL_USERS + '/' + uid + HttpService.URL_EXTENSION_FEEDBACK_REQUESTS);
  }

  submitFeedback(feedback: string): Observable<Feedback> {
    return this.http.doPost<Feedback>(HttpService.URL_USERS_FEEDBACK, feedback);
  }

}
