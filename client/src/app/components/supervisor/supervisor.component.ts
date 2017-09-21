import { Component, OnInit } from '@angular/core';
import { ControlAccessService } from '../../services/control-access.service';
 import { ParamMap} from '@angular/router';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
empp:any=[];
public:any;
e:any;
 internal:any;
  restricted:any;
   accessType:any;

   datepickerModel: any;

public modalRef: BsModalRef;

 public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private newrequest: ControlAccessService,private router: ActivatedRoute, private route: Router, private modalService: BsModalService) { }
  ngOnInit() {
    this.router.paramMap
    .switchMap((params:ParamMap)=>this.newrequest.getEmployeeByID(this.router.snapshot.params['value']))
   .subscribe(res=>{
    
    this.empp=res;
    console.log(this.empp)
 });

   this.datepickerModel = new Date();
     let a=this.datepickerModel.getDate();
     let b=this.datepickerModel.getMonth()+1;
     let c=this.datepickerModel.getFullYear();
      this.datepickerModel=a+'/'+b+'/'+c;

  }

 accept(temp:any) {

    this.e = {
      prev: "Supervisor",
      current: "Hr",
     zone: [this.public,this.internal,this.restricted],
     accessType: this.accessType
   }
 

   this.newrequest.update(this.empp.employeeID, this.e)
   .subscribe(res=>{
     console.log(res)

   })
   this.openModalWithClass(temp)
this.route.navigate(['/superdash']);
 }

reject(temp:any) {
  this.openModalWithClass(temp)
}


 backit() {
   this.e = {
      prev: "Supervisor",
      current: "Employee",
   }
 

   this.newrequest.update(this.empp.employeeID, this.e)
   .subscribe(res=>
     {console.log(res)
  


     })

        alert("Form Rejected Successfully")
this.route.navigate(['/superdash']);
this.modalRef.hide();
 }

      public openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }
}