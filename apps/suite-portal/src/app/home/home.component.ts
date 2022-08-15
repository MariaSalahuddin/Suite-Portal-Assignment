import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MaintenanceService } from '../services/maintenance.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;
  maintenanceForm: FormGroup;
  

  constructor(private fb: FormBuilder, private maintenanceService: MaintenanceService, private snackBar: MatSnackBar) {
    //
  }

  ngOnInit(): void {
    this.maintenanceForm = this.fb.group({
      unitNumber: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      serviceType: ['', Validators.required],
      summary: ['', Validators.required],
      details: [''],
    });
    
  }
  submitForm(){
    this.maintenanceService.saveMaintenanceForm(this.maintenanceForm.value).then(response => {
      this.snackBar.open('Form submitted Successfully', '', {
        duration: 3000
      });
    }, error => {
      this.snackBar.open('Error! Please try again later', '', {
        duration: 3000
      });
    });
 

  }

}
