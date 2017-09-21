import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ControlAccessService {
  constructor(private http: Http) { }
  save(employee) {
    console.log(employee)
 return this.http
             .post('http://localhost:4000/insert',employee)
             .map(res=>res.json());
}

//Get data from mssql database using employee id
getEmpSql(employeeID)
{
    return this.http
                .get('http://localhost:4002/getData/'+employeeID)
                .map(res=>res.json());
}

//Angular Service of get method of employee
getEmployee()
{
    return this.http
                .get('http://localhost:4000/findemployee')
                .map(res=>res.json());
}
getEmployeeByID(employeeID)
{
    return this.http
                .get('http://localhost:4000/findemployeebyid/'+employeeID)
                .map(res=>res.json());
}

update(id, employee) {
     console.log(employee)
return this.http
            .put('http://localhost:4000/update/'+id,employee)
            .map(res=>res.json());

}
}
