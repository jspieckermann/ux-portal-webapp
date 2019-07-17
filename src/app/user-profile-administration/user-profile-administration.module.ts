import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileAdministrationRoutingModule } from './user-profile-administration-routing.module';
import { UserProfileAdministrationComponent } from './user-profile-administration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserProfileAdministrationComponent],
  imports: [
    CommonModule,
    UserProfileAdministrationRoutingModule,
    SharedModule
  ],
  exports: [UserProfileAdministrationComponent]
})
export class UserProfileAdministrationModule { }
