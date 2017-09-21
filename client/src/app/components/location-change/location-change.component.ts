import { Component, OnInit } from '@angular/core';
import { LocationChangeService } from '../../services/location-change.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-change',
  templateUrl: './location-change.component.html',
  styleUrls: ['./location-change.component.css']
})
export class LocationChangeComponent implements OnInit {
public location:any;
 constructor(private locationChangeService:LocationChangeService, private router:Router) { }

  ngOnInit() {
  }

locationChangeSubmit(locationchange){
  console.log(locationchange.value);
  return this.locationChangeService.locationChangeMethod(locationchange.value)
 .subscribe((data)=>{
 this.router.navigate(['/dashboard']);  
})

}

back() {
  this.router.navigate(['/dashboard']);
}
  
}
