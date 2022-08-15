import { Injectable } from '@nestjs/common';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as nanoid from 'nanoid';

export interface MaintenanceRequestDB extends MaintenanceRequest {
  id: string;
  submittedAt: Date;
}

export interface MaintenanceRequestData {
  requests: MaintenanceRequestDB[];
}

const adapter = new FileSync<MaintenanceRequestDB>('./db/maint-requests.json')
const db = low(adapter)

db.defaults({ requests: [] }).write();

@Injectable()
export class MaintenanceRequestDao {

  private get collection(): any {
    return db.get('requests');
  }

  constructor() {
    //
  }

  async insertNewRequest(maintenanceRequest: MaintenanceRequest) {
    const id = { id: nanoid.nanoid(10) };
    await this.collection
      .push({
        ...id,
        ...maintenanceRequest,
        submittedAt: new Date(),
        status: "open"
      })
      .write()
    return id;
  }
  async updateRequest(id: String, maintenanceRequest) {
    const index = await this.collection.findIndex(obj => obj.id == id);
    this.collection.value()[index].status = maintenanceRequest.status
    this.collection.write();
    return id;
  }
  async getMaintenanceRequest(id: string): Promise<MaintenanceRequestDB> {
    return await this.collection.find({ id }).value();
  }
  async getList(): Promise<MaintenanceRequestDB> {
    return await this.collection.value();
  }
  async updateMaintenanceRequest(id, bodyParam): Promise<MaintenanceRequestDB> {
    return await this.collection.value();
  }
}
