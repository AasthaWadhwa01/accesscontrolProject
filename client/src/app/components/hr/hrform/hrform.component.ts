// imports 
import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { TemplateRef } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ControlAccessService } from '../../../../services/control-access.service';
import { config } from '../../../config';

// component 
@Component({
  selector: 'app-hrform',
  templateUrl: './hrform.component.html',
  styleUrls: ['./hrform.component.css']
})

export class HrformComponent implements OnInit {

  // variable declaration 
  empp: any = [];
  e: any;
  datepickerModel: any;
  errors: any;
  public modalRef: BsModalRef;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private newrequest: ControlAccessService, private route: Router, private router: ActivatedRoute, private modalService: BsModalService) {}
  
  getConfig(): any {
    return Promise.resolve(config)
    .then(data => {
      this.config = data;
    })
  }  
  ngOnInit() {
    this.getConfig();
    this.router.paramMap
    .switchMap((params: ParamMap) => this.newrequest.getEmployeeByID(this.router.snapshot.params['value']))
    .subscribe(res => {
      this.empp = res;
    },
    error => {
      this.errors = error;
    });
    this.datepickerModel = new Date();
    let a = this.datepickerModel.getDate();
    let b = this.datepickerModel.getMonth() + 1;
    let c = this.datepickerModel.getFullYear();
    this.datepickerModel = a + '/' + b + '/' + c;
  }

  // accepting request 
  accept(temp: any): any {
    this.e = {
      prev: "Hr",
      current: "Cso",
    }
    this.newrequest.update(this.empp.employeeID, this.e)
    .subscribe(res => {},
      error => {
        this.errors = error;
      })
    this.openModalWithClass(temp)
    this.route.navigate(['/hrdash']);
  }

  // rejecting request 
  reject(temp: any): void {
    this.openModalWithClass(temp)
  }

  // status change 
  backit(): any {
    this.e = {
      prev: "Hr",
      current: "Supervisor",
    }
    this.newrequest.update(this.empp.employeeID, this.e)
    .subscribe(res => {},
      error => {
        this.errors = error;
      })
    this.route.navigate(['/hrdash']);
    this.modalRef.hide();
  }

  // model class 
  public openModalWithClass(template: TemplateRef < any > ): any {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
  }
}
