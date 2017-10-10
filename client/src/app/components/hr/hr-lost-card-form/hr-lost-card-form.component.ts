import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import 'rxjs/add/operator/switchMap';

import { EmployeeService } from '../../../services/employee.service'; 
import { LostCardService } from '../../../services/lost-card.service';
import { config } from '../../../config';

@Component({
  selector: 'app-hr-lost-card-form',
  templateUrl: './hr-lost-card-form.component.html',
  styleUrls: ['./hr-lost-card-form.component.css']
})
export class HrLostCardFormComponent implements OnInit {

// variable declaration 
  empp: any = [];
  e: any;
  datepickerModel: any;
  errors: any;
  config = config;
  public modalRef: BsModalRef;
  public configg = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };


	constructor(private lostrequest: LostCardService, private newrequest: EmployeeService, private router: ActivatedRoute, private route: Router, private modalService: BsModalService) {}
  
 
	ngOnInit() {
	this.router.paramMap
		.switchMap((params: ParamMap) => this.lostrequest.getEmployeeByID(this.router.snapshot.params['value']))
		.subscribe(res => {
			this.empp = res;
		})

		error => {
			this.errors = error;
		};

		/*For DatePicker for picking the date*/
		this.datepickerModel = new Date();
		let date = this.datepickerModel.getDate();
		let month = this.datepickerModel.getMonth() + 1;
		let year = this.datepickerModel.getFullYear();
		this.datepickerModel = date + '/' + month + '/' + year;
	}
	
 // accepting request 
  acceptRequest(temp: any): any {
    this.e = {
      prev: "Hr",
      current: "Cso",
    }
    this.lostrequest.update(this.empp.employeeID, this.e)
    .subscribe(res => {},
      error => {
        this.errors = error;
      })
    this.openModalWithClass(temp)
    this.route.navigate(['/hrdash']);
  }

  // rejecting request 
  rejectRequest(temp: any): void {
    this.openModalWithClass(temp)
  }

  // status change 
  backit(): any {
    this.e = {
      prev: "Hr",
      current: "Supervisor",
    }
    this.lostrequest.update(this.empp.employeeID, this.e)
    .subscribe(res => {},
      error => {
        this.errors = error;
      })
    this.route.navigate(['/hrdash']);
    this.modalRef.hide();
  }

  // model class 
  public openModalWithClass(template: TemplateRef < any > ): any {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.configg, { class: 'gray modal-lg' }));
  }

}
