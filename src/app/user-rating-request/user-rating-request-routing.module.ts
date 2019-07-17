import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRatingRequestComponent } from './user-rating-request.component';

const routes: Routes = [{path: '', component: UserRatingRequestComponent,
  data: {breadcrumb: 'Bewertungen', breadcrumbShowParameter: false}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRatingRequestRoutingModule { }
