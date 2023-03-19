import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { sharedModule } from './shared/shared.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './shared/services/email.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SuccessfulSubmitedPageComponent } from './pages/successful-submited-page/successful-submited-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactPageComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    SuccessfulSubmitedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
