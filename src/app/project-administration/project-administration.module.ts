import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectAdministrationRoutingModule } from './project-administration-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectAdministrationComponent } from './project-administration.component';

@NgModule({
  declarations: [ProjectAdministrationComponent],
  imports: [
    CommonModule,
    ProjectAdministrationRoutingModule,
    SharedModule
  ],
  exports: [ProjectAdministrationComponent]
})
export class ProjectAdministrationModule { }
