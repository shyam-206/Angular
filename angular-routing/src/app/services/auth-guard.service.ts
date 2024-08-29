import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../components/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanActivateChild ,CanDeactivate<ContactComponent> {

  constructor(private authService  : AuthService) { }
  router : Router = inject(Router)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const isLogged = this.authService.isAuthenticated()

      if(isLogged){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      } 
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute,state)
  }

  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit()
  }
}
