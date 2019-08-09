import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BreadcrumbModule } from './breadcrumb-trail/breadcrumb.module';
import { SignInModule } from './sign-in/sign-in.module';
import { HomeModule } from './home/home.module';
import { UserRatingRequestModule } from './user-rating-request/user-rating-request.module';
import { UserProfileAdministrationModule } from './user-profile-administration/user-profile-administration.module';
import { ProjectAdministrationModule } from './project-administration/project-administration.module';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    BreadcrumbModule,
    SignInModule,
    HomeModule,
    UserRatingRequestModule,
    UserProfileAdministrationModule,
    ProjectAdministrationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
