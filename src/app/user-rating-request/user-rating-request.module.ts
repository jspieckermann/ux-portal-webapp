import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRatingRequestRoutingModule } from './user-rating-request-routing.module';
import { UserRatingRequestComponent } from './user-rating-request.component';
import { UserRatingRequestCardComponent } from './user-rating-request-card/user-rating-request-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserRatingRequestComponent, UserRatingRequestCardComponent, StarRatingComponent],
  imports: [
    CommonModule,
    UserRatingRequestRoutingModule,
    SharedModule
  ],
  exports: [
    UserRatingRequestComponent
  ]
})
export class UserRatingRequestModule { }
