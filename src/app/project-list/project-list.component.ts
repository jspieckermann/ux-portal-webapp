import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/model/Project';
import { ProjectAdministrationService } from '../core/services/project-administration.service';
import { RoutingService } from '../core/services/routing.service';
import { SigninService } from '../core/services/signin.service';
import { Status } from '../shared/model/Status';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectAdministrationService, private routingService: RoutingService,
              private signinService: SigninService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      data => {
        console.log('Projects retrieval SUCCESSFUL: ', JSON.stringify(data));
        this.projects = data;
      }
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
