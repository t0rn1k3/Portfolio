import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SuccessfulSubmitedPageComponent } from './pages/successful-submited-page/successful-submited-page.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : 'contact', component : ContactPageComponent},
  {path: 'confirm', component: SuccessfulSubmitedPageComponent},
  {path: '**', redirectTo: '404PageNotFound', pathMatch: 'full'},
  {path:  '404PageNotFound', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
