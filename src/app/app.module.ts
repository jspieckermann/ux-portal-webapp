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
import { ProjectCandidatesComponent } from './components/project-candidates/project-candidates.component';
import { ProjectClientComponent } from './components/project-client/project-client.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserCardPanelComponent } from './components/user-card-panel/user-card-panel.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BreadcrumbNavComponent } from './components/breadcrumb-nav/breadcrumb-nav.component';
import { ProjectContractorComponent } from './components/project-contractor/project-contractor.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    ProjectCreateComponent,
    ProjectOverviewComponent,
    ProjectDetailsComponent,
    ProjectCandidatesComponent,
    ProjectClientComponent,
    UserCardComponent,
    UserCardPanelComponent,
    ProjectCardComponent,
    BreadcrumbNavComponent,
    ProjectContractorComponent
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
