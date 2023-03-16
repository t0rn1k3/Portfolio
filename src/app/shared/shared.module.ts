import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
    declarations : [
        HeaderComponent,
        SkillsComponent,
    ],
    imports : [

    ], 
    exports : [
        HeaderComponent,
    ],
})

export class sharedModule {

}