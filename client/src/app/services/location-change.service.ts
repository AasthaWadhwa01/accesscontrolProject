import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { config } from '../config';

@Injectable()
export class LocationChangeService {
	
	config = config;

	constructor(private http:Http) { }

ngOnInit() {
}

	//method is used to hit api on express server and post the data of form in database
	locationChangeMethod(change:any){
		return this.http
		.post(this.config.connect.url+this.config.connect.port+'/'+'locationchange'+'/'+'newlocation',change)
		.map(res=>res.json());
	}

	//method is used to hit api on express server and get the location change data from database
	getLocationChange()
	{
		return this.http
		.get(this.config.connect.url+this.config.connect.port+'/'+'locationchange'+'/'+'locationchangedetails')
		.map(res=>res.json());
	}
}