import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';
import { User } from 'src/app/model/User';
import { Project } from 'src/app/model/Project';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-project-user-profiles',
  templateUrl: './project-user-profiles.component.html',
  styleUrls: ['./project-user-profiles.component.css']
})
export class ProjectUserProfilesComponent implements OnInit {

  private readonly KEY_SHOW_BUTTONS = 'showButtons';
  private readonly KEY_ROLE = 'role';
  private readonly KEY_ID = 'id';

  showButtons: boolean;
  role: string;
  id: number;
  users: User[];
  project: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectAdministrationService,
              private routingService: RoutingService) { }

  ngOnInit() {
    this.showButtons = this.route.snapshot.data[this.KEY_SHOW_BUTTONS];
    this.role = this.route.snapshot.data[this.KEY_ROLE];
    this.id = parseInt(this.route.snapshot.params[this.KEY_ID], 10);
    this.projectService.getProject(this.id).subscribe(
      data => {
        this.project = data;
        this.users = this.getProfiles();
        console.log('User retrieval SUCCESSFUL: ', JSON.stringify(this.users));
      },
      error => {console.log('User retrieval FAILED: ', error.status); }
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

  private getProfiles(): User[] {
    let result: User[];
    if (this.role === Profile.Client) {
      result = [this.project.client];
    } else if (this.role === Profile.Contractor) {
      result = [this.project.contractor];
    } else {
      result = this.project.candidates;
    }
    return result;
  }

}

export enum Profile {
  Client = 'CLIENT',
  Contractor = 'CONTRACTOR',
  Candidates = 'CANDIDATES'
}
