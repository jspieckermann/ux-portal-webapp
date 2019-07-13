import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { FeedbackRequestComponent } from './components/feedback-request/feedback-request.component';
import { ProjectUserProfilesComponent, Profile } from './components/project-user-profiles/project-user-profiles.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Home', breadcrumbShowParameter: false}},
  {path: 'signin', component: SigninComponent, data: {breadcrumb: 'Anmelden', breadcrumbShowParameter: false}},
  {path: 'register', component: RegisterComponent, data: {breadcrumb: 'Registrieren', breadcrumbShowParameter: false}},
  {path: 'project-create', component: ProjectCreateComponent, canActivate: [AuthGuardService],
    data: {breadcrumb: 'Projekt anlegen', breadcrumbShowParameter: false}},
  {path: 'project-overview', component: ProjectOverviewComponent, data: {breadcrumb: 'Projekte', breadcrumbShowParameter: false}},
  {path: 'project-details/:id', component: ProjectDetailsComponent, data: {breadcrumb: '', breadcrumbShowParameter: true}},
  {path: 'project-candidates/:id', component: ProjectUserProfilesComponent,
    data: {breadcrumb: 'Kandidaten', breadcrumbShowParameter: false, showButtons: true, role: Profile.Candidates}},
  {path: 'project-client/:id', component: ProjectUserProfilesComponent,
    data: {breadcrumb: 'Kunde', breadcrumbShowParameter: false, showButtons: false, role: Profile.Client}},
  {path: 'project-contractor/:id', component: ProjectUserProfilesComponent,
    data: {breadcrumb: 'Kontraktor', breadcrumbShowParameter: false, showButtons: false, role: Profile.Contractor}},
  {path: 'feedback-requests/:id', component: FeedbackRequestComponent,
    data: {breadcrumb: 'Bewertungen', breadcrumbShowParameter: false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
