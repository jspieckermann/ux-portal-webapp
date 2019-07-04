import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ProjectCandidatesComponent } from './components/project-candidates/project-candidates.component';
import { ProjectClientComponent } from './components/project-client/project-client.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Home', breadcrumbShowParameter: false}},
  {path: 'signin', component: SigninComponent, data: {breadcrumb: 'Anmelden', breadcrumbShowParameter: false}},
  {path: 'register', component: RegisterComponent, data: {breadcrumb: 'Registrieren', breadcrumbShowParameter: false}},
  {path: 'project-create', component: ProjectCreateComponent, canActivate: [AuthGuardService],
    data: {breadcrumb: 'Projekt anlegen', breadcrumbShowParameter: false}},
  {path: 'project-overview', component: ProjectOverviewComponent, data: {breadcrumb: 'Projekte', breadcrumbShowParameter: false}},
  {path: 'project-details/:id', component: ProjectDetailsComponent, data: {breadcrumb: '', breadcrumbShowParameter: true}},
  {path: 'project-candidates/:id', component: ProjectCandidatesComponent,
    data: {breadcrumb: 'Kandidaten', breadcrumbShowParameter: false}},
  {path: 'project-client/:id', component: ProjectClientComponent, data: {breadcrumb: 'Kunde', breadcrumbShowParameter: false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
