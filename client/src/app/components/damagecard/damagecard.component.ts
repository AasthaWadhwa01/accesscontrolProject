import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DamagecardService } from '../../services/damagecard.service';
import { ControlAccessService } from '../../services/control-access.service';
import { Router } from '@angular/router'

@Component({
 selector: 'app-damagecard',
 templateUrl: './damagecard.component.html',
 styleUrls: ['./damagecard.component.css']
})
export class DamagecardComponent implements OnInit { 
   date:any
   comments:string
   data:any =[];
   
   constructor(private  damagecardService:DamagecardService, private router:Router) { }
   //datepickerModel: Date;
ngOnInit()
 {
      this.date = new Date();
  let a=this.date.getDate();
  let b=this.date.getMonth()+1;
  let c=this.date.getFullYear();
   this.date=a+'/'+b+'/'+c;
}

 damage(damage,date){

          this.data= {
      comments:damage,
      date:date
     
    }  
       /*if(request===''){
            alert("please write reason for damage ");
       }
     
        else {*/
         
          console.log(this.data); 
        this.damagecardService.damage(this.data)
        .subscribe((data)=>{
        	      this.router.navigate(['/dashboard']);
          })
   

}

back() {
  this.router.navigate(['/dashboard']);
}
}
