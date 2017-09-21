import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locationchange',
  templateUrl: './locationchange.component.html',
  styleUrls: ['./locationchange.component.css']
})
export class LocationchangeComponent implements OnInit {

 public location:any;

	//constructor initialize's location change service & router
	constructor(private locationChangeService:LocationChangeService, private router:Router) { }

	ngOnInit() {
	}

	//method called on submit button for saving the details of location change form
	locationChangeSubmit(locationchange){
		console.log(locationchange.value);
		return this.locationChangeService.locationChangeMethod(locationchange.value)
		.subscribe((data)=>{
			this.router.navigate(['/dashboard']);  
		})
	}

	//method called on Go Back button and navigate to dashboard of employee 
	back() {
		this.router.navigate(['/dashboard']);
	}

}
