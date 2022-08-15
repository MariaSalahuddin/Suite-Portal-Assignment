import { Module } from '@nestjs/common';
import { MaintenanceRequestModule } from '../maintenance-request/maintenance-request.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRequestModule } from './user/user.module';
import { AuthMiddleware } from './auth.service';

@Module({
  imports: [MaintenanceRequestModule, UserRequestModule ],
  controllers: [AppController],
  providers: [AppService, AuthMiddleware],
})
export class AppModule {}
