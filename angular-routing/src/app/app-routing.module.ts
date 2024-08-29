import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuardService } from './services/auth-guard.service';
//here we use the CanActivateFn user-build-function
import { CanActivate } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'home' , component : HomeComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'contact' , component : ContactComponent , canDeactivate : [AuthGuardService]  },
  { path : 'courses' , component : CoursesComponent },
  { path : 'courses' , canActivateChild : [AuthGuardService] , children : [
    {path : 'course/:id' , component : CourseDetailComponent },
    { path : 'checkout' , component : CheckoutComponent}
  ]},
  { path : 'login' , component : LoginComponent },
  { path : '**' , component : NotFoundComponent}, //if any random path route is define render the NotFound Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing : true})],
  exports: [RouterModule],
  providers : [ AuthGuardService]
})
export class AppRoutingModule { }
