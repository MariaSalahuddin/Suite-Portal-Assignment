import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { MaintenanceService } from './services/maintenance.service';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [MaintenanceService, SettingsService, UserService, AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
