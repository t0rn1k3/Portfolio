import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : 'contact', component : ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
