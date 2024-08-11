import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';
import { PostServiceComponent } from './post-service/post-service.component';
import { PostService } from './Services/post.service';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularRxjsComponent } from './angular-rxjs/angular-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    CrudAngularComponent,
    PostServiceComponent,
    FormPracticeComponent,
    AngularRxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'posts' , component : PostListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
