import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { config } from '../config';

@Injectable()
export class LostCardService {

	config = config;

  constructor(private http: Http) { }
  
  ngOnInit() {
}

//Lost Card Service to hit API of db to save comment & date
save(comment) {	
	console.log(comment)
 return this.http
             .post(this.config.connect.url+this.config.connect.port+'/lostcard/'+'lostInsert',comment)
	}

//Lost Card Service to hit API of db to get details of lost card
getLostCard()
{
	return this.http
	            .get(this.config.connect.url+this.config.connect.port+'/lostcard/'+'findlost')
	            .map(res=>res.json());
}

 //Get data from mssql database using employee id
  getEmpSql(employeeID) {
    return this.http
    .get(this.config.connect.url+this.config.connect.port+'/employee/'+'getData/' + employeeID)
    .map(res => res.json());
  }

   /*getEmployeeByID method to fetch details by id used in supervisor component*/
  getEmployeeByID(employeeID) {
    return this.http
    .get(this.config.connect.url+this.config.connect.port+'/lostcard/'+'findemployeebyid/' + employeeID)
    .map(res => res.json());
  }
   /*update method used in supervisor component*/
  update(id, employee) {
    console.log(employee)
    return this.http
    .put(this.config.connect.url+this.config.connect.port+'/lostcard/'+'update/' + id, employee)
    .map(res => res.json());

 }

	}
