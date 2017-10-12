import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { config } from '../config';

@Injectable()

export class ReportService {

    config = config;

  constructor(private http: Http) { }

  //method for getting the employee data having status closed

  getEmployeeClosed() {

    return this.http

    .get(this.config.connect.url+this.config.connect.port+'/requester/'+'employeereportclosed')

    .map(res => res.json());

  }

  //method for getting the employee data having status pending with cso

   getEmployeePending() {

    return this.http

    .get(this.config.connect.url+this.config.connect.port+'/requester/'+'employeereportpending')

    .map(res => res.json());

  }

}