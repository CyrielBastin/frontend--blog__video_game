import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor (
        private auth_service: AuthService,
        private router: Router
    ) {}

    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean
    {
        if (this.auth_service.isLoggedIn() && this.auth_service.getRole() == '9') {
            return true
        } 

        this.router.navigate(['/login'])
    }
}
