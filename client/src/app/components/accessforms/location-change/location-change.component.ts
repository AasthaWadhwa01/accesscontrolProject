import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';

import { LocationChangeService } from '../../../services/location-change.service';
import { config } from '../../../config';

@Component({
  selector: 'app-location-change',
  templateUrl: './location-change.component.html',
  styleUrls: ['./location-change.component.css']
})

//location change component class starts here
export class LocationChangeComponent implements OnInit {
	public location:any;
	errors:any;
	config = config;

	//constructor initialize's location change service & router
	constructor(private locationChangeService:LocationChangeService, private router:Router) {}

	ngOnInit() {
 	}

	//method called on submit button for saving the details of location change form
	locationChangeSubmit(locationchange:any):any {
		return this.locationChangeService.locationChangeMethod(locationchange.value)
		.subscribe((data:any):void=> {
			this.router.navigate(['/empdash']);  
		},
    	error=>{
     	this.errors=error
     })
	}

	//method called on Go Back button and navigate to dashboard of employee 
	back(): void {
		this.router.navigate(['/empdash']);
	}
}






 