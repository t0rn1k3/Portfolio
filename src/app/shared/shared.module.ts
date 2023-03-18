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
        SocialComponent
    ],
})

export class sharedModule {

}