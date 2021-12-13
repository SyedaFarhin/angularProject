import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Landing1Component } from './landing1/landing1.component';
import { Landing2Component } from './landing2/landing2.component';
import { ButtonComponent } from './button/button.component';
import { ProfileComponent } from './main/sidebar/profile/profile.component';
import { SkillsComponent } from './main/sidebar/skills/skills.component';
import { LanguagesComponent } from './main/sidebar/languages/languages.component';
import { EducationComponent } from './main/wallpage/education/education.component';
import { WorkExperienceComponent } from './main/wallpage/work-experience/work-experience.component';
import { NavbarComponent } from './food/navbar/navbar/navbar.component';
import { AboutComponent } from './food/about/about/about.component';
import { HeaderComponent } from './food/header/header/header.component';
import {FooterComponent} from './food/footer/footer/footer.component'
import { BlogPostsComponent } from './food/footer/blog-posts/blog-posts.component';
import { PopularTagsComponent } from './food/footer/popular-tags/popular-tags.component';
import { PaginationComponent } from './food/pagination/pagination/pagination.component';
import { ContentComponent } from './food/content/content/content.component';
import { FoooterComponent } from './main/footer/foooter/foooter.component';
import { SidebarComponent } from './protfolio/sidebar/sidebar/sidebar.component';
import { TitleComponent } from './protfolio/title/title/title.component';
import { BasicComponent } from './protfolio/value/basic/basic.component';
import { ProComponent } from './protfolio/value/pro/pro.component';
import { PremiumComponent } from './protfolio/value/premium/premium.component';
import { ContactComponent } from './protfolio/contact/contact/contact.component';
import { PhotosComponent } from './protfolio/photos/photos/photos.component';

import { AboutMeComponent } from './protfolio/about/about-me/about-me.component';
import { MySkillsComponent } from './protfolio/about/my-skills/my-skills.component';
import { MyImagesComponent } from './protfolio/about/my-images/my-images.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    Landing1Component,
    Landing2Component,
    ButtonComponent,
    ProfileComponent,
    SkillsComponent,
    LanguagesComponent,
    EducationComponent,
    WorkExperienceComponent,
    NavbarComponent,
    AboutComponent,
    HeaderComponent,
    FoooterComponent,
    BlogPostsComponent,
    PopularTagsComponent,
    PaginationComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    TitleComponent,
    BasicComponent,
    ProComponent,
    PremiumComponent,
    ContactComponent,
    PhotosComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyImagesComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
