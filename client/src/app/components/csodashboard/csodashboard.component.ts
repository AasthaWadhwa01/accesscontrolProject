import { Component, OnInit } from '@angular/core';
import { DamagecardService} from '../../services/damagecard.service'
import { LostCardService} from '../../services/lost-card.service'
import {LocationChangeService} from  '../../services/location-change.service'
import { ThirdPartyService} from '../../services/third-party.service'
import { ControlAccessService } from '../../services/control-access.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-csodashboard',
  templateUrl: './csodashboard.component.html',
  styleUrls: ['./csodashboard.component.css']
})
export class CsodashboardComponent implements OnInit {


 emp:any = [];
 super:any=[];
 show:any=false;

  constructor(private damage:DamagecardService,private lost:LostCardService,
                private location:LocationChangeService,private third:ThirdPartyService,
                private newrequest: ControlAccessService, private router: Router) { }

getID(value){
    console.log('from getID')
    this.router.navigate(['/cso',value])
}

  ngOnInit() {

}

showAccess() {

    this.damage.getDamageCard()
    .subscribe(res=>
{
        console.log(res)
    });
  
 this.lost.getLostCard()
 .subscribe(res=>console.log(res));
 this.third.getThird()
  .subscribe(res=>console.log(res));
  this.location.getLocationChange()
   .subscribe(res=>console.log(res));
this.newrequest.getEmployee()
 .subscribe(res=>{
    this.emp=res;
for(let a=0;a<this.emp.length;a++)
{
  if(this.emp[a].current=="Cso")
  {
    this.super.push(this.emp[a])
  }
  }
 });
  
  this.show = !this.show;

}
}