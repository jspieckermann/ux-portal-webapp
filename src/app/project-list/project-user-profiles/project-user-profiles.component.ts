import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/User';
import { Feedback } from 'src/app/shared/model/Feedback';
import { Project } from 'src/app/shared/model/Project';
import { ProjectAdministrationService } from 'src/app/core/services/project-administration.service';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { RoutingService } from 'src/app/core/services/routing.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/shared/model/Role';


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
  model: Map<User, Feedback[]> = new Map<User, Feedback[]>();
  project: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectAdministrationService,
              private routingService: RoutingService, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.showButtons = this.route.snapshot.data[this.KEY_SHOW_BUTTONS];
    this.role = this.route.snapshot.data[this.KEY_ROLE];
    this.id = parseInt(this.route.snapshot.params[this.KEY_ID], 10);
    this.projectService.getProject(this.id).subscribe(
      data => {
        this.project = data;
        this.users = this.getProfiles();
        console.log('User retrieval SUCCESSFUL: ', JSON.stringify(this.users));
        this.users.forEach(user => {
          this.feedbackService.getFeedback(user.id).subscribe(
            feedback => {
              this.model.set(user, feedback);
              console.log('User feedback retrieval SUCCESSFUL: ', JSON.stringify(feedback));
            }
          );
        });
      }
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
      }
    );
  }

  onAccept(user: User) {
    this.projectService.setContractor(this.project.id, JSON.stringify(user)).subscribe(
      data => {
        console.log('Set contractor SUCCESSFUL: ', JSON.stringify(data));
        this.project = data;
        this.routingService.routeToProjectDetails(this.project.id);
      }
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
