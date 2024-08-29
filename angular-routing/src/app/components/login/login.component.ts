import { Component, ElementRef, OnInit, ViewChild, inject, } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username !: ElementRef 
  @ViewChild('password') password !: ElementRef


  authService : AuthService = inject(AuthService)
  router : Router = inject(Router)
  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() : void{
    this.activeRoute.queryParams.subscribe((queries) => {
      const logout = Boolean(queries['logout'])

      if(logout){
        this.authService.logout()
        alert('You are now logged out. Islogged =' + this.authService.isLogged)
      }
    })
  }

  

  OnLoginClicked(){
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value

    const user = this.authService.login(username,password)

    if(user === undefined){
      alert('the login credentials you have entered is not correct')
    }else{
      alert(`Welcome ${username}. You are logged in.`)
      this.router.navigate(['/courses'])
    }
  }

  
}
