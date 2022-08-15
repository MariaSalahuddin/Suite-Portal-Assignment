import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private user: any = null;
    constructor() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    public isAuthenticated(): boolean {
        if (this.user && (this.user.role == "ADMIN"))
            return true;
        return false;
    }

}