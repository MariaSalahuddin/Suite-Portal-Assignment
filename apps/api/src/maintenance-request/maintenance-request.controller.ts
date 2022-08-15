import { BadRequestException, Body, Controller, Post, Get, Param, Put, Headers } from '@nestjs/common';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import { MaintenanceRequestService } from './maintenance-request.service';
import { AuthMiddleware } from '../app/auth.service';
@Controller('maintenance-requests')
export class MaintenanceRequestController {

  constructor(
    private readonly maintenanceRequestService: MaintenanceRequestService, private authMiddleware: AuthMiddleware
  ) {
  }

  @Post('/')
  public async createMaintenanceRequest(
    @Body() maintenanceRequest: MaintenanceRequest,
  ) {
    if (!maintenanceRequest?.summary) {
      throw new BadRequestException('Must provide a valid summary');
    }
    if (!maintenanceRequest?.serviceType) {
      throw new BadRequestException('Must provide a valid Service Type');
    }
    return await this.maintenanceRequestService.createMaintenanceRequest(maintenanceRequest);
  }
  @Put('/:id')
  public async updateMaintenanceRequest(

    @Param('id') id: string,
    @Body() maintenanceRequest: MaintenanceRequest,
    @Headers() header,
  ) {
    const checkAuth = await this.authMiddleware.auth(header.authorization)
    if (checkAuth) {
      if (!id || !maintenanceRequest) {
        throw new BadRequestException('No id provided');
      }
      return await this.maintenanceRequestService.updateMaintenanceRequest(id, maintenanceRequest);
    }
  }

  @Get('/:id')
  public async getMaintenanceRequest(
    @Param('id') id: string,
  ) {
    if (!id) {
      throw new BadRequestException('No id provided');
    }
    return await this.maintenanceRequestService.getMaintenanceRequest(id);
  }
  @Get('/')
  public async getMaintenanceList(@Headers() header) {
    const checkAuth = await this.authMiddleware.auth(header.authorization)
    if (checkAuth)
      return await this.maintenanceRequestService.getMaintenanceList();
  }

}
