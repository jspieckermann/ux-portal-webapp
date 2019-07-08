import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-project-contractor',
  templateUrl: './project-contractor.component.html',
  styleUrls: ['./project-contractor.component.css']
})
export class ProjectContractorComponent implements OnInit {

  id: number;
  users: User[];

  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectAdministrationService) { }

  ngOnInit() {
    const routeParameter = 'id';
    this.activeRoute.params.subscribe(params => this.id = parseInt(params[routeParameter], 10));
    this.projectService.getProject(this.id).subscribe(
      data => {
        console.log('Contractor retrieval SUCCESSFUL: ', JSON.stringify(data.contractor));
        this.users = [data.contractor];
      },
      error => {console.log('Contractor retrieval FAILED: ', error.status); }
    );
  }

}
