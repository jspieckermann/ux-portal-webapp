import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { RoutingService } from 'src/app/services/routing.service';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';
import { SigninService } from 'src/app/services/signin.service';
import { Status } from 'src/app/model/Status';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectAdministrationService, private routingService: RoutingService,
              private signinService: SigninService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      data => {
        console.log('Projects retrieval SUCCESSFUL: ', JSON.stringify(data));
        this.projects = data;
      },
      error => {console.log('Projects retrieval FAILED: ', error.status); }
    );
  }

  onDetails(id: number) {
    this.routingService.routeToProjectDetails(id);
  }

  showCandidatesStatus(project: Project): boolean {
    return project.contractor == null;
  }

  showContractorStatus(project: Project): boolean {
    return project.contractor != null && !this.isCompleted(project);
  }

  showCompletedStatus(project: Project): boolean {
    return this.isCompleted(project);
  }

  private isCompleted(project: Project): boolean {
    return project.status === Status.Completed;
  }

}
