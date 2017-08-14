import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { MyIntroComponent } from './my-intro/my-intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    MyExperienceComponent,
    MyIntroComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyEducationComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
