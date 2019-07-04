import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';

@Component({
  selector: 'app-project-client',
  templateUrl: './project-client.component.html',
  styleUrls: ['./project-client.component.css']
})
export class ProjectClientComponent implements OnInit {

  id: number;
  users: User[];

  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectAdministrationService) { }

  ngOnInit() {
    const routeParameter = 'id';
    this.activeRoute.params.subscribe(params => this.id = parseInt(params[routeParameter], 10));
    this.projectService.getProject(this.id).subscribe(
      data => {
        console.log('Client retrieval SUCCESSFUL: ', JSON.stringify(data.client));
        this.users = [data.client];
      },
      error => {console.log('Client retrieval FAILED: ', error.status); }
    );
  }

}
