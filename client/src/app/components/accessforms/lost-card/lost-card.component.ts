//importing all required dependencies
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ParamMap, Params, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { LostCardService } from '../../../services/lost-card.service';
import { config } from '../../../config';

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styleUrls: ['./lost-card.component.css'],
  providers: [LostCardService]
})

export class LostCardComponent implements OnInit {
  //declaring all required variables
  date: any;
  comment: any;
  data: any = [];
  errors: any;
  config = config;
  employeeDetail: any = [];
  empId: string;
  status: string = "";
  change: string = "";
  a: any;
  empType: any;
  selectedcategory: any;
  empName: any;
  doj: any;
  designation: any;
  project: any;
  department: any;
  doe: any;
  existPro: any;
  newPro: any;
  appSign: any;
  dateCurr: any;

  //Constructor initialize LostcardService & Router 
  constructor(private LostCardService: LostCardService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) {}


  datepickerModel: Date;
  public modalRef: BsModalRef;
  employee: any;

  public configModal = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

 ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.LostCardService.getEmpSql(this.route.snapshot.params['value']))
      .subscribe(
        res => {
          this.employee = res;
          this.empId = this.employee[0][0].EMPNO;
          this.empName = this.employee[0][0].NAME;
          this.doj = this.employee[0][0].DOJ;
          this.project = this.employee[0][0].PRACTICE;
          this.department = this.employee[0][0].OUTXT;
        },
        error => {
          this.errors = error;
        })

    this.date = new Date();
    let day = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    this.date = day + '/' + month + '/' + year;
  }

  //method to open modal window
  public openModalWithClass(template: TemplateRef <any> ): any {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.configModal, { class: 'gray modal-lg' }));
  }

  //method call on submit button for saving the reasion & date of lost card
  save(comment: string, date: any) {

    this.data = {
      empId: this.empId,
      name: this.empName,
      project: this.project,
      ou: this.department,
      comment: comment,
      date: date,
      prev: "Employee",
      current: "Supervisor"
    };

    this.LostCardService.save(this.data).subscribe((data: any) => {
      this.data=data;
      this.router.navigate(['/empdash']);
    })

  }

  //method call on Go back button & navigate to dashboard of employee
  back() {
    this.router.navigate(['/empdash']);
  }
}
