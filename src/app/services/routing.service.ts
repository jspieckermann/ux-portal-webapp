import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private readonly HOME = '/home';
  private readonly SIGNIN = '/signin';
  private readonly REGISTER = '/register';
  private readonly PROJECT_OVERVIEW = '/project-overview';
  private readonly PROJECT_CREATE = '/project-create';
  private readonly PROJECT_DETAILS = '/project-details';
  private readonly PROJECT_CANDIDATES = '/project-candidates';
  private readonly PROJECT_CLIENT = '/project-client';
  private readonly PROJECT_CONTRACTOR = '/project-contractor';
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
    this.routeTo(this.PROJECT_DETAILS + '/' + id);
  }

  routeToProjectCandidates(id: number) {
    this.routeTo(this.PROJECT_CANDIDATES + '/' + id);
  }

  routeToProjectClient(id: number) {
    this.routeTo(this.PROJECT_CLIENT + '/' + id);
  }

  routeToProjectContractor(id: number) {
    this.routeTo(this.PROJECT_CONTRACTOR + '/' + id);
  }

  routeToFeedbackRequests(id: number) {
    this.routeTo(this.FEEDBACK_REQUESTS + '/' + id);
  }

  private routeTo(url: string) {
    this.router.navigateByUrl(url);
  }


}
