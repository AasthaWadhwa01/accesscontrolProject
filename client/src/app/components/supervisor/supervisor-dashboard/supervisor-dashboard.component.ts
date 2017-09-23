import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

import { DamagedCardService} from '../../../services/damaged-card.service';
import { LostCardService} from '../../../services/lost-card.service'
import { LocationChangeService} from  '../../../services/location-change.service'
import { ThirdPartyService} from '../../../services/third-party.service'
import { EmployeeService } from '../../../services/employee.service'
import { config } from '../../../config';
@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  //variables declarations
  emp:any = [];
  super:any=[];
  show:boolean = false;
  config: any;

  //constructor initializing required services and router
  constructor(private damage:DamagedCardService,private lost:LostCardService,
    private location:LocationChangeService,private third:ThirdPartyService,
    private newrequest: EmployeeService, private router: Router) { }

  //method used to fetch requester's form by supervisor
  getID(value):any {
    this.router.navigate(['/superform',value])
  }
  ngOnInit() {
    this.getConfig();
  }

  //method used to show the requests of various user's on supervisor dashboard
  showAccess():any {
    this.damage.getDamageCard()
    .subscribe(res=> {
    });
    this.lost.getLostCard()
    .subscribe(res=>{
    });
    this.third.getThird()
    .subscribe(res=>{
    });
    this.location.getLocationChange()
    .subscribe(res=>{
    });
    this.newrequest.getEmployee()
    .subscribe(res=>{
      this.emp=res;
      for(let a=0;a<this.emp.length;a++)
      {
        if(this.emp[a].current=="Supervisor")
        {
          this.super.push(this.emp[a])
        }
      }
    });
    this.show = !this.show;
  }

   //getting config file 
  getConfig(): any {
    return Promise.resolve(config)
    .then(data => {
      this.config = data;
    })
  }
}
