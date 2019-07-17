import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProjectAdministrationService } from '../core/services/project-administration.service';
import { RoutingService } from '../core/services/routing.service';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.css']
})
export class ProjectAdministrationComponent implements OnInit {

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

