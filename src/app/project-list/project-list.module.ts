import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent } from './project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUserProfilesComponent } from './project-user-profiles/project-user-profiles.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { UserRatingCardComponent } from './user-rating-card/user-rating-card.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectCardComponent, ProjectDetailsComponent,
    ProjectUserProfilesComponent, UserProfileCardComponent, UserRatingCardComponent, UserProfileListComponent],
  imports: [
    CommonModule,
    ProjectListRoutingModule,
    SharedModule
  ],
  exports: [ProjectListComponent]
})
export class ProjectListModule { }
