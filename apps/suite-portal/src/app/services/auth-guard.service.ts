import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    currentUser: any
    constructor(private router: Router, private authService: AuthService) {

    }
    canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }


}