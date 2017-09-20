import { Component, OnInit } from '@angular/core';
import { ControlAccessService } from '../../services/control-access.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

empl:any = [];
reqstatus:any;

  constructor(private emp: ControlAccessService) { }

  ngOnInit() {
  	this.emp.getEmployee()
  	.subscribe(res=>{
  		this.empl = res;
if(this.empl.length>=1)
{
  		 	if(this.empl[this.empl.length-1].current=="Closed")
  	{
  		this.reqstatus = "Your request has been approved by CSO";
  	}
  	else if(this.empl[this.empl.length-1].current=="Employee" && this.empl[this.empl.length-1].prev=="Supervisor")
  	{
  		this.reqstatus = "Your request has been rejected by Supervisor";
  	}
  	else if(this.empl[this.empl.length-1].current=="Supervisor" && this.empl[this.empl.length-1].prev=="Hr")
  	{
  		this.reqstatus = "Your request has been rejected by Hr";
  	}
  	else if(this.empl[this.empl.length-1].current=="Hr" && this.empl[this.empl.length-1].prev=="Cso")
  	{
  		this.reqstatus = "Your request has been rejected by CSO";
  	}
  	else if(this.empl[this.empl.length-1].current=="Supervisor" && this.empl[this.empl.length-1].prev=="Employee")
  	{
  		this.reqstatus = "Your request is pending with Supervisor";
  	}
  	else if(this.empl[this.empl.length-1].current=="Hr" && this.empl[this.empl.length-1].prev=="Supervisor")
  	{
  		this.reqstatus = "Your request is pending with Hr";
  	}
  	else if(this.empl[this.empl.length-1].current=="Cso" && this.empl[this.empl.length-1].prev=="Hr")
  	{
  		this.reqstatus = "Your request is pending with CSO";
  	}
    else {
      this.reqstatus = "You haven't made any request yet";
    }
  }
  	})
  }
}
