import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import 'rxjs/add/operator/switchMap';

import { EmployeeService } from '../../../services/employee.service'; 
import { config } from '../../../config';

@Component({
	selector: 'app-supervisor-form',
	templateUrl: './supervisor-form.component.html',
	styleUrls: ['./supervisor-form.component.css']
})

export class SupervisorFormComponent implements OnInit {
	empp: any = [];
	public: any;
	obj: any;
	internal: any;
	restricted: any;
	accessType: any;
	datepickerModel: any;
	errors:any;
	config: any;

	public modalRef: BsModalRef;
	public configModal = {
		animated: true,
		keyboard: true,
		backdrop: true,
		ignoreBackdropClick: false
	};

	constructor(private newrequest: EmployeeService, private router: ActivatedRoute, private route: Router, private modalService: BsModalService) {}

  /*Get fields from Config File*/
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

	/*For Accepts The Request*/
	accept(temp: any):void {
      this.obj = {
			prev: "Supervisor",
			current: "Hr",
			zone: [this.public, this.internal, this.restricted],
			accessType: this.accessType
		}
    this.newrequest.update(this.empp.employeeID, this.obj)
		.subscribe(res => {},
		error => {
			this.errors = error;
		});
		this.openModalWithClass(temp)
		this.route.navigate(['/superdash']);
	}

	/*For Reject The Request*/
	reject(temp: any):any {
		this.openModalWithClass(temp)
	}

	/*For Status Supervisor,Employee*/
	backit():void {
		this.obj = 
		{
			prev: "Supervisor",
			current: "Employee",
		}

		this.newrequest.update(this.empp.employeeID, this.obj)
		.subscribe(res => {})
		error => {
			this.errors = error;
		}
		alert("Form Rejected Successfully")
		this.route.navigate(['/superdash']);
		this.modalRef.hide();
	}

	public openModalWithClass(template: TemplateRef < any > ):any {
		this.modalRef = this.modalService.show(template, Object.assign({}, this.configModal, { class: 'gray modal-lg' }));
	}
}
