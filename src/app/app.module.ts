import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatePipe } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { sharedModule } from './shared/shared.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmailService } from './shared/services/email.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SuccessfulSubmitedPageComponent } from './pages/successful-submited-page/successful-submited-page.component';

import { APP_INITIALIZER } from '@angular/core';

import { TranslateService } from './shared/services/translate.service';


export function setupTranslateServiceFactory(
  service: TranslateService): Function {
return () => service.use('en');
}


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
    HttpClientModule,
  ],
  providers: [
    EmailService, 
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


