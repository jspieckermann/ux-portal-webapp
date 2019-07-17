import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';
import { Status } from 'src/app/shared/model/Status';
import { ProjectAdministrationService } from 'src/app/core/services/project-administration.service';
import { SigninService } from 'src/app/core/services/signin.service';
import { RoutingService } from 'src/app/core/services/routing.service';

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
