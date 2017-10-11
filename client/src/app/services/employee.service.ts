import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { config } from '../config';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()

//class of employee service
export class EmployeeService {

config = config;

 //constructor of employee service
  constructor(private http: Http) {}

    private handle(error : Response){
   if(error.status == 500)
   {
     return Observable.throw(error.json());
     
   }
   else if (error.status==404)
   {
      return Observable.throw(error.json());
   }
 }

 //save method to insert data of employee
  save(employee) {
    console.log(employee)
    return this.http
    .post(this.config.connect.url+this.config.connect.port+'/requester/'+'insert', employee)
    //.map(res => res.json());
  }

 //Get data from mssql database using employee id
  getEmpSql(employeeID) {
    return this.http
    .get(this.config.connect.url+this.config.connect.port+'/login/'+'getData/' + employeeID)
    .map(res => res.json(),error=>error.json());
  }

 //Angular Service of get method of employee
  getEmployee() {
    return this.http
    .get(this.config.connect.url+this.config.connect.port+'/requester/'+'findemployee')
    .map(res => res.json());
  }

 /*update method used in supervisor component*/
  update(id, employee) {
    console.log(employee)
    return this.http
    .put(this.config.connect.url+this.config.connect.port+'/requester/'+'update/' + id, employee)
    .map(res => res.json());

 }
  
 /*getEmployeeByID method to fetch details by id used in supervisor component*/
  getEmployeeByID(employeeID) {
    return this.http
    .get(this.config.connect.url+this.config.connect.port+'/requester/'+'findemployeebyid/' + employeeID)
    .map(res => res.json());
  }

}