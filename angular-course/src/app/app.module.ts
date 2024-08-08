import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    CrudAngularComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
