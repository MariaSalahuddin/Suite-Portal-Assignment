import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { MaintenanceListComponent } from './admin/maintenance-list/maintenance-list.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'maintenanceList',
    component: MaintenanceListComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    HomeModule,
    AdminModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: true,
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
