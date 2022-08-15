import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/httP';
import { SettingsService } from './settings.service';
export class MaintenanceRequest {
    id: number = 0;
    name: string = "";
    email: string = "";
    unitNumber: string = "";
    serviceType: string = "";
    summary: string = "";
    details?: string = "";
}


@Injectable()
export class MaintenanceService {
    baseUrl: string;
    headers: HttpHeaders = new HttpHeaders();
    constructor(private http: HttpClient, private settingsService: SettingsService) {
        this.baseUrl = this.settingsService.getApiBaseUrl();
        this.headers = this.headers.append('Content-Type', 'application/json');
        this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    }

    saveMaintenanceForm(maintenaceRequest: MaintenanceRequest) {
        return this.http.post(this.baseUrl + 'maintenance-requests', maintenaceRequest).toPromise();
    }
    getAllMaintenanceRequest() {
        var user = JSON.parse(localStorage.getItem('user'));
        this.headers = this.headers.set('Authorization', "Bearer " + user.token);
        return this.http.get(this.baseUrl + 'maintenance-requests', { 'headers': this.headers }).toPromise();
    }
    updateMaintenanceRequest(id, status) {
        var user = JSON.parse(localStorage.getItem('user'));
        this.headers = this.headers.set('Authorization', "Bearer " + user.token);
        return this.http.put(this.baseUrl + 'maintenance-requests/' + id, status, { 'headers': this.headers }).toPromise();
    }

}
