import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { PopularComponent } from './pages/home/popular/popular.component';
import { TestimonyComponent } from './pages/home/testimony/testimony.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
    PopularComponent,
    TestimonyComponent,
    ServicesComponent,
    ContactUsComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [HeaderComponent]
})
export class AppModule { }
