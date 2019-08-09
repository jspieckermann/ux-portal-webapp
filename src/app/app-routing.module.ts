import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  {path: 'signin', loadChildren: () => import('./sign-in/sign-in.module').then(mod => mod.SignInModule)},
  {path: 'register',
    loadChildren: () => import('./user-profile-administration/user-profile-administration.module').
      then(mod => mod.UserProfileAdministrationModule)},
  {path: 'project-create',
    loadChildren: () => import('./project-administration/project-administration.module').
      then(mod => mod.ProjectAdministrationModule)},
  {path: 'feedback-requests/:id',
    loadChildren: () => import('./user-rating-request/user-rating-request.module').
      then(mod => mod.UserRatingRequestModule)},
  {path: 'project-list',
    loadChildren: () => import('./project-list/project-list.module').
      then(mod => mod.ProjectListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
