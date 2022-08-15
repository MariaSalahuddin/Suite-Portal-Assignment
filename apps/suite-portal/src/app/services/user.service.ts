import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/httP';
import { SettingsService } from './settings.service';

@Injectable()
export class UserService {
    baseUrl: string;
    constructor(private http: HttpClient, private settingsService: SettingsService) {
         this.baseUrl = this.settingsService.getApiBaseUrl();
     }
     
     login(userData){
        return this.http.post(this.baseUrl + 'user/login', userData).toPromise();
    }
    }