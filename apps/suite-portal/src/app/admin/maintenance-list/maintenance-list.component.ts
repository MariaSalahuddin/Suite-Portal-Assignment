import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'pm-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {
  maintenanceRequests: any = [];
  displayedColumns: string[] = ['apartmentno', 'requesterName', 'requesterEmail', 'serviceType', 'submittedAt', 'summary', 'details','status'];
  status = [{'value': 'close' , 'viewName': 'Close'},{'value': 'open','viewName':'Open'}]

  constructor(private maintenanceService: MaintenanceService) {
    //
  }

  ngOnInit(): void {
    this.getMaintenanceRequests();
    
    
  }
  changeStatus(id,status){
    
    this.maintenanceService.updateMaintenanceRequest(id,{'status': status}).then(response => {
       console.log("success")
      }, error => {
        console.log(error)
      });
  }
  getMaintenanceRequests(){
    this.maintenanceService.getAllMaintenanceRequest().then(response => {
    this.maintenanceRequests = response;
    },
     error => {
      console.log(error)
    });
 

  }

}
