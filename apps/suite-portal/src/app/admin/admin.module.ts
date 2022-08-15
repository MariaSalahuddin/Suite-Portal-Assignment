import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    //AppRoutingModule
    
  ],
  declarations: [LoginComponent, MaintenanceListComponent],
  exports: [LoginComponent, MaintenanceListComponent]
})
export class AdminModule { }
