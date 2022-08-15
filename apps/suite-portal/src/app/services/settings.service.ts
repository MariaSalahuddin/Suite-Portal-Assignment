import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
	constructor() {
	}
	private settings = {
		apiBaseUrl: "http://localhost:3333/api/"

	}
	getApiBaseUrl() {
		return this.settings.apiBaseUrl;
	}
}