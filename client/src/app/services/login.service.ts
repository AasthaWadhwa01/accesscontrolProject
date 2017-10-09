import { Injectable } from '@angular/core';
import { config } from '../config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
config = config;
  constructor(private http: Http) { }

  //Get data from mssql database using employee id
  getCsoRole(employeeID) :any {
     return this.http
    .get(this.config.connect.url+this.config.connect.port+'/employee/verifyCso/'+'getData/' + employeeID)
    .map(res => console.log(res.json()));

  }

  //Get data from mssql database using employee id
  getSupervisorRole(employeeID) :any {
     return this.http
    .get(this.config.connect.url+this.config.connect.port+'/employee/verifySupervisor/'+'getData/' + employeeID)
    .map(res => console.log(res.json()));

  }

//Get data from mssql database using employee id
  getHrRole(employeeID) :any {
     return this.http
    .get(this.config.connect.url+this.config.connect.port+'/employee/verifyHr/'+'getData/' + employeeID)
    .map(res => console.log(res.json()));

  }


}
