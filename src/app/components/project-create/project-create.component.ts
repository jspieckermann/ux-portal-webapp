import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RoutingService } from 'src/app/services/routing.service';
import { ProjectAdministrationService } from 'src/app/services/project-administration.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectAdministrationService,
              private snackbar: MatSnackBar, private routingService: RoutingService) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      category: ['', Validators.required],
      headline: ['', Validators.required],
      description: ['', Validators.required],
      budget: ['', Validators.required],
      deliverables: ['', Validators.required],
      deadline: ['', '']
    });
  }

  hasError(name: string, error: string): boolean {
    return this.projectForm.controls[name].hasError(error);
  }

  create() {
      if (this.projectForm.invalid) {
        return;
      }
      this.projectService.createProject(JSON.stringify(this.projectForm.getRawValue())).subscribe(
        data => {
          console.log('Project creation SUCCESSFUL: ', JSON.stringify(data));
          this.snackbar.open('Projekt erfolgreich angelegt!', '', { duration: 3000 });
          this.routingService.routeToProjectOverview();
        },
        error => {
          console.log('Project creation FAILED: ', error.status);
          this.snackbar.open('Projekt konnte nicht angelegt werden: ' + error.status, '', { duration: 3000 });
        }
      );
  }

}
