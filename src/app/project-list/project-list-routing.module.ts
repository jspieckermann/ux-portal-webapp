import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUserProfilesComponent } from './project-user-profiles/project-user-profiles.component';
import { Profile } from '../shared/model/Role';

const routes: Routes = [
  {path: '', component: ProjectListComponent, data: {breadcrumb: 'Projekte', breadcrumbShowParameter: false}},
  {path: ':id', component: ProjectDetailsComponent, data: {breadcrumb: 'Details', breadcrumbShowParameter: true}},
  {path: ':id/candidates', component: ProjectUserProfilesComponent,
  data: {breadcrumb: 'Kandidaten', breadcrumbShowParameter: false, showButtons: true, role: Profile.Candidates}},
{path: ':id/client', component: ProjectUserProfilesComponent,
  data: {breadcrumb: 'Kunde', breadcrumbShowParameter: false, showButtons: false, role: Profile.Client}},
{path: ':id/contractor', component: ProjectUserProfilesComponent,
  data: {breadcrumb: 'Kontraktor', breadcrumbShowParameter: false, showButtons: false, role: Profile.Contractor}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectListRoutingModule { }
