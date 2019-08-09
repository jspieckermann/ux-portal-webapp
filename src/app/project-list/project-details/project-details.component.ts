import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Project } from 'src/app/shared/model/Project';
import { ProjectAdministrationService } from 'src/app/core/services/project-administration.service';
import { SigninService } from 'src/app/core/services/signin.service';
import { RoutingService } from 'src/app/core/services/routing.service';
import { Status } from 'src/app/shared/model/Status';

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
      }
    );
  }

  onWithdrawApplication() {
    this.projectService.removeCandidate(this.project.id, this.signinService.getUser().id).subscribe(
      data => {
        this.project = data;
        console.log('Withdraw application SUCCESSFUL: ', JSON.stringify(data));
        this.snackbar.open('Bewerbung zurückgezogen', '', { duration: 3000 });
        this.routingService.routeToProjectOverview();
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
      }
    );
  }

  onCompleteProject() {
    console.log('completion called on details');
    this.projectService.completeProject(this.project.id).subscribe(
      data => {
        this.project = data;
        console.log('Completion SUCCESSFUL: ', JSON.stringify(data));
        this.routingService.routeToProjectOverview();
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

  showCompleteButton(): boolean {
    return this.userIsClient() && this.contractSigned() && !this.isCompleted();
  }

  showEditButton(): boolean {
    return this.userIsClient() && !this.isCompleted();
  }

  routeToCandidates(id: number) {
    this.routingService.routeToProjectCandidates(id);
  }

  routeToClient(id: number) {
    this.routingService.routeToProjectClient(id);
  }

  routeToContractor(id: number) {
    this.routingService.routeToProjectContractor(id);
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

  private isCompleted(): boolean {
    return this.project.status === Status.Completed;
  }

}
