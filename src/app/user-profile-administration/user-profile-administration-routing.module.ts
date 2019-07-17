import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileAdministrationComponent } from './user-profile-administration.component';

const routes: Routes = [{path: '', component: UserProfileAdministrationComponent,
  data: {breadcrumb: 'Registrieren', breadcrumbShowParameter: false}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileAdministrationRoutingModule { }
