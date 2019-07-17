import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectAdministrationComponent } from './project-administration.component';
import { AuthGuardService } from '../core/guards/auth-guard.service';

const routes: Routes = [{path: '', component: ProjectAdministrationComponent, canActivate: [AuthGuardService],
data: {breadcrumb: 'Projekt anlegen', breadcrumbShowParameter: false}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectAdministrationRoutingModule { }
