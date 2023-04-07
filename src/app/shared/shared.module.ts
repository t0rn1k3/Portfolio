import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SocialComponent } from './components/social/social.component';
import { LanguagesComponent } from './components/languages/languages.component';

import { translatePipe } from './pipe/translate.pipe';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { TextareaComponent } from './components/textarea/textarea.component';



@NgModule({
    declarations : [
        HeaderComponent,
        SkillsComponent,
        SkillItemComponent,
        ContactFormComponent,
        InputComponent,
        ButtonComponent,
        LoaderComponent,
        SocialComponent,
        LanguagesComponent,
        translatePipe,
        AboutMeComponent,
        CustomButtonComponent,
        PersonalInfoComponent,
        ProjectsContainerComponent,
        ProjectItemComponent,
        TextareaComponent
    ],
    imports : [
        BrowserModule,
        RouterModule,
        ReactiveFormsModule
    ], 
    exports : [
        HeaderComponent,
        SkillsComponent,
        ContactFormComponent,
        SocialComponent,
        AboutMeComponent,
        CustomButtonComponent,
        PersonalInfoComponent,
        ProjectsContainerComponent,
    ],
})

export class sharedModule {

}