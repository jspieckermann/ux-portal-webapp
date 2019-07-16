import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { HomeComponent } from './components/home/home.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { UserCardPanelComponent } from './components/user-card-panel/user-card-panel.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FeedbackRequestCardComponent } from './components/feedback-request-card/feedback-request-card.component';
import { FeedbackRequestComponent } from './components/feedback-request/feedback-request.component';
import { ProjectUserProfilesComponent } from './components/project-user-profiles/project-user-profiles.component';
import { UserFeedbackEntryComponent } from './components/user-feedback-entry/user-feedback-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    ProjectCreateComponent,
    ProjectOverviewComponent,
    ProjectDetailsComponent,
    UserProfileCardComponent,
    UserCardPanelComponent,
    ProjectCardComponent,
    BreadcrumbsComponent,
    StarRatingComponent,
    FeedbackRequestCardComponent,
    FeedbackRequestComponent,
    ProjectUserProfilesComponent,
    UserFeedbackEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
