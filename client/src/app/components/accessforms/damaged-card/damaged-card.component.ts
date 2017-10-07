import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { DamagedCardService } from './../../../services/damaged-card.service';
import { config } from '../../../config';

@Component({
  selector: 'app-damaged-card',
  templateUrl: './damaged-card.component.html',
  styleUrls: ['./damaged-card.component.css'],
  providers:[DamagedCardService]
})
export class DamagedCardComponent implements OnInit {

  date:any;
  comments:string;
  data:any =[];
  config = config;
  
  //constructor initialises DamagedCardService and Router 
  constructor(private  damagecardService:DamagedCardService, private router:Router) {

   }

    ngOnInit() {

    //datepickerModel: Date;
    this.date = new Date();
    let day=this.date.getDate();
    let month=this.date.getMonth()+1;
    let year=this.date.getFullYear();
    this.date=day+'/'+month+'/'+year;
    }

  //method to take data of form to DamagedCardService to hit api
  getDamage(damageReason:string, damageDate:string):any {
    this.data= { comments:damageReason, date:damageDate }  
    this.damagecardService.damage(this.data)
    .subscribe((data)=> {
      this.router.navigate(['/empdash']);
      })
    }

  //navigate data to EmployeeDashboardComponent on back button clicking
  back() :void {
    this.router.navigate(['/empdash']);
    }
}
