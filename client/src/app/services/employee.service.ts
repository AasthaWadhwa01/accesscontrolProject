import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

//class of employee service
export class EmployeeService {

  //constructor of employee service
  constructor(private http: Http) {}

  //save method to insert data of employee
  save(employee) {
    console.log(employee)
    return this.http
    .post('http://localhost:4000/insert', employee)
    .map(res => res.json());
  }

  //Get data from mssql database using employee id
  getEmpSql(employeeID) {
    return this.http
    .get('http://localhost:4002/getData/' + employeeID)
    .map(res => res.json());
  }

  //Angular Service of get method of employee
  getEmployee() {
    return this.http
    .get('http://localhost:4000/findemployee')
    .map(res => res.json());
  }

  /*update method used in supervisor component*/
  update(id, employee) {
    console.log(employee)
    return this.http
    .put('http://localhost:4000/update/' + id, employee)
    .map(res => res.json());

  }
  
  /*getEmployeeByID method to fetch details by id used in supervisor component*/
  getEmployeeByID(employeeID) {
    return this.http
    .get('http://localhost:4000/findemployeebyid/' + employeeID)
    .map(res => res.json());
  }

}
