import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { AdminComponent } from './header/admin/admin.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { SubscribeService } from './services/subscribe.service';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectComponent } from './subject/subject.component';
import { UnsbscribeComponent } from './unsbscribe/unsbscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    AdminComponent,
    UserListComponent,
    UserDetailComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    UnsbscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService,UserService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
