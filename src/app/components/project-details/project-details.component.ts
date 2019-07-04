import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/Project';
import { RoutingService } from 'src/app/services/routing.service';
import { SigninService } from 'src/app/services/signin.service';
import { MatSnackBar } from '@angular/material';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;

  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectAdministrationService,
              private routingService: RoutingService, private signinService: SigninService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    const routeParameter = 'id';
    this.activeRoute.params.subscribe(params => this.id = parseInt(params[routeParameter], 10));
    this.projectService.getProject(this.id).subscribe(
      data => {
        this.project = data;
        console.log('Project retrieval SUCCESSFUL: ', JSON.stringify(data));
      },
      error => {console.log('Project retrieval FAILED: ', error.status); }
    );
  }

  onWithdrawApplication() {
    this.projectService.removeCandidate(this.project.id, this.signinService.getUser().id).subscribe(
      data => {
        this.project = data;
        console.log('Withdraw application SUCCESSFUL: ', JSON.stringify(data));
        this.snackbar.open('Bewerbung zurückgezogen', '', { duration: 3000 });
        this.routingService.routeToProjectOverview();
      },
      error => {
        console.log('Withdraw application FAILED: ', error.status);
        this.snackbar.open('Bewerbung konnte nicht zurückgezogen werden', '', { duration: 3000 });
      }
    );
  }

  onApplyApplication() {
    this.projectService.addCandidate(this.project.id, JSON.stringify(this.signinService.getUser())).subscribe(
      data => {
        this.project = data;
        console.log('Apply application SUCCESSFUL: ', JSON.stringify(data));
        this.snackbar.open('Bewerbung wurde erfasst', '', { duration: 3000 });
        this.routingService.routeToProjectOverview();
      },
      error => {
        console.log('Apply application FAILED: ', error.status);
        this.snackbar.open('Bewerbung konnte nicht erfasst werden', '', { duration: 3000 });
      }
    );
  }

  showApplyApplicationButton(): boolean {
    return this.userSignedIn() && !this.contractSigned() && !this.userIsClient() && !this.userIsCandidate();
  }

  showWithdrawApplicationButton(): boolean {
    return this.userIsCandidate();
  }

  showToClientButton(): boolean {
    return !this.userIsClient();
  }

  showToCandidatesButton(): boolean {
    return !this.contractSigned();
  }

  showToContractorButton(): boolean {
    return this.contractSigned();
  }

  showEditButton(): boolean {
    return this.userIsClient();
  }

  routeToCandidates(id: number) {
    this.routingService.routeToProjectCandidates(id);
  }

  routeToClient(id: number) {
    this.routingService.routeToProjectClient(id);
  }

  private userSignedIn(): boolean {
    return this.signinService.getUser() != null;
  }

  private userIsClient(): boolean {
    return this.signinService.isSignedIn(this.project.client);
  }

  private userIsCandidate(): boolean {
    return this.signinService.containsSignedIn(this.project.candidates);
  }

  private contractSigned(): boolean {
    return this.project.contractor != null;
  }

}
