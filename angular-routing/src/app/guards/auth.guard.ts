import { inject } from '@angular/core'
import { AuthService } from "../services/auth.service"
import { Router } from '@angular/router'

//by the creating a function only and then we can use the guard for the router
export const CanActivate = () => {
    
    const authService = inject(AuthService)
    const router = inject(Router)

    if(authService.isAuthenticated())
        return true
    else {
        router.navigate(['/login'])
        return false
    }
}