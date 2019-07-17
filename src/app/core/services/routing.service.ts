import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private readonly HOME = '/home';
  private readonly SIGNIN = '/signin';
  private readonly REGISTER = '/register';
  private readonly PROJECT_OVERVIEW = '/project-list';
  private readonly PROJECT_CREATE = '/project-create';
  private readonly PROJECT_CANDIDATES = '/candidates';
  private readonly PROJECT_CLIENT = '/client';
  private readonly PROJECT_CONTRACTOR = '/contractor';
  private readonly FEEDBACK_REQUESTS = '/feedback-requests';

  constructor(private router: Router) { }

  routeToProjectCreate() {
    this.routeTo(this.PROJECT_CREATE);
  }

  routeToProjectOverview() {
    this.routeTo(this.PROJECT_OVERVIEW);
  }

  routeToRegister() {
    this.routeTo(this.REGISTER);
  }

  routeToSignin() {
    this.routeTo(this.SIGNIN);
  }

  routeToHome() {
    this.routeTo(this.HOME);
  }

  routeToProjectDetails(id: number) {
    this.routeTo(this.PROJECT_OVERVIEW + '/' + id);
  }

  routeToProjectCandidates(id: number) {
    this.routeTo(this.PROJECT_OVERVIEW + '/' + id + this.PROJECT_CANDIDATES);
  }

  routeToProjectClient(id: number) {
    this.routeTo(this.PROJECT_OVERVIEW + '/' + id + this.PROJECT_CLIENT);
  }

  routeToProjectContractor(id: number) {
    this.routeTo(this.PROJECT_OVERVIEW + '/' + id + this.PROJECT_CONTRACTOR);
  }

  routeToFeedbackRequests(id: number) {
    this.routeTo(this.FEEDBACK_REQUESTS + '/' + id);
  }

  private routeTo(url: string) {
    console.log('Route to: ' + url);
    this.router.navigateByUrl(url);
  }


}
