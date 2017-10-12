/*imports required for this Component*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DamagedCardService } from '../../../services/damaged-card.service';
import { LostCardService } from '../../../services/lost-card.service';
import { LocationChangeService } from '../../../services/location-change.service';
import { ThirdPartyService } from '../../../services/third-party.service';
import { EmployeeService } from '../../../services/employee.service';
import { ReportService } from '../../../services/report.service';
import { ExcelService } from '../../../services/excel.service';
import { config } from '../../../config';

@Component({
  selector: 'app-cso-dashboard',
  templateUrl: './cso-dashboard.component.html',
  styleUrls: ['./cso-dashboard.component.css']
})

/*class starts here*/
export class CsoDashboardComponent implements OnInit {
  emp: any = [];
  super: any = [];
  show: any = false;
  errors: any;
  config = config;
  dataClosed: any=[];
  dataPending: any=[];
  data: any=[];

  /*constructor of hr dashboard Component*/
  constructor(private damage: DamagedCardService, private lost: LostCardService,
    private location: LocationChangeService, private third: ThirdPartyService,
    private newrequest: EmployeeService, private report: ReportService, private excel: ExcelService, private router: Router) {}

  //get report for employees having closed status
   getEmployeeClosed(){
    this.report.getEmployeeClosed()
    .subscribe(res => {
      this.data=res;  

      for(let i=0; i<this.data.length; i++){

        let obj1 = {
        EmployeeID : this.data[i].employeeID,
        EmployeeName : this.data[i].employeeName,
        DateOfJoining   : this.data[i].dateOfJoining,
        Project : this.data[i].project,
        Department : this.data[i].department,
        Status : this.data[i].current
        }
        this.dataClosed.push(obj1)
      }
      this.excel.exportAsExcelFile(this.dataClosed,'report');
  })
  }

  //get report for employees having status pending with cso
  getEmployeePending(){
    this.report.getEmployeePending()
    .subscribe(res => {
      this.data=res;  

      for(let i=0; i<this.data.length; i++){
        let obj1 = {
        EmployeeID : this.data[i].employeeID,
        EmployeeName : this.data[i].employeeName,
        DateOfJoining   : this.data[i].dateOfJoining,
        Project : this.data[i].project,
        Department : this.data[i].department,
        Status : this.data[i].current
        }
        this.dataPending.push(obj1)
      }
      this.excel.exportAsExcelFile(this.dataPending,'report');
  })
  }

  /*method to send employee id to hr component through navigate*/
  getID(value) {
    console.log('from getID');
    this.router.navigate(['/csoform', value]);
  }

   getEmpIdLocationRequest(value) {
    console.log('from getID');
    this.router.navigate(['/csolocationform', value]);
  }

  /*ngonit method for this class*/
  ngOnInit() {
  }

  /*method to get config file elements*/
  getConfig(): any {
    return Promise.resolve(config)
      .then(data => {
        this.config = data;
      })
  }

  /*method to get details of employee having damage card*/
  showAccess() {
    this.damage.getDamageCard()
      .subscribe(res => {
        console.log(res)
      });

    /* method of lost card service is called to get details of employee who lost the card*/
    this.lost.getLostCard()
     .subscribe(res => console.log(res), error => {
        this.errors = error
      });

    /* method of third party service is called to get details of third party employee*/
    this.third.getThird()
      .subscribe(res => console.log(res), error => {
        this.errors = error
      });

    /* method of location change service is called to get details of employee who changed location*/
    this.location.getLocationChange()
      .subscribe(res => {
       
        /*for loop to set the pending status*/
        for (let a = 0; a < this.emp.length; a++) {
          if (this.emp[a].current == "Cso") {
            this.super.push(this.emp[a])
          }
        }
      });

    /* method of control access service is called to get details of employee*/
    this.newrequest.getEmployee()
      .subscribe(res => {

        this.emp = res.data;

        /*for loop to set the pending status*/
        for (let a = 0; a < this.emp.length; a++) {
          if (this.emp[a].current == "Cso") {
            this.super.push(this.emp[a])
          }
        }
      });

    this.show = !this.show;
  }
  /*showAccess() ends here*/
}
/*class ends here*/

