import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
    declarations : [
        HeaderComponent,
        SkillsComponent,
        SkillItemComponent,
        ContactFormComponent,
    ],
    imports : [
        BrowserModule,
        RouterModule
    ], 
    exports : [
        HeaderComponent,
        SkillsComponent,
        ContactFormComponent
    ],
})

export class sharedModule {

}