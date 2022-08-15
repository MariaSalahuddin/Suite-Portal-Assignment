import { Module } from '@nestjs/common';
import { MaintenanceRequestController } from './maintenance-request.controller';
import { MaintenanceRequestDao } from './maintenance-request.dao';
import { MaintenanceRequestService } from './maintenance-request.service';
import { AuthMiddleware } from '../app/auth.service';

@Module({
  imports: [],
  controllers: [MaintenanceRequestController],
  providers: [
    MaintenanceRequestService,
    MaintenanceRequestDao,
    AuthMiddleware
  ],
})
export class MaintenanceRequestModule {}
