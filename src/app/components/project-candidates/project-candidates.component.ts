import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/Project';
import { RoutingService } from 'src/app/services/routing.service';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';
import { User } from 'src/app/model/User';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-project-candidates',
  templateUrl: './project-candidates.component.html',
  styleUrls: ['./project-candidates.component.css']
})
export class ProjectCandidatesComponent implements OnInit {

  id: number;
  project: Project;

  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectAdministrationService,
              private routingService: RoutingService, private signinService: SigninService) { }

  ngOnInit() {
    const routeParameter = 'id';
    this.activeRoute.params.subscribe(params => this.id = parseInt(params[routeParameter], 10));
    this.projectService.getProject(this.id).subscribe(
      data => {
        console.log('Candidates retrieval SUCCESSFUL: ', JSON.stringify(data.candidates));
        this.project = data;
      },
      error => {console.log('Candidates retrieval FAILED: ', error.status); }
    );
  }

  onReject(user: User) {
    this.projectService.removeCandidate(this.project.id, user.id).subscribe(
      data => {
        console.log('Reject user SUCCESSFUL: ', JSON.stringify(data));
        this.project = data;
        if (this.project.candidates.length === 0) {
          this.routingService.routeToProjectDetails(this.project.id);
        }
      },
      error => {console.log('Reject user FAILED: ', error.status); }
    );
  }

  onAccept(user: User) {
    this.projectService.setContractor(this.project.id, JSON.stringify(user)).subscribe(
      data => {
        console.log('Set contractor SUCCESSFUL: ', JSON.stringify(data));
        this.project = data;
        this.routingService.routeToProjectDetails(this.project.id);
      },
      error => {console.log('Set contractor FAILED: ', error.status); }
    );
  }

  isProjectOwner() {
    return this.signinService.isSignedIn(this.project.client);
  }

}
