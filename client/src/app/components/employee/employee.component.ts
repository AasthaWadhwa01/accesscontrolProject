import { Component,OnInit, TemplateRef } from '@angular/core';
import { ControlAccessService } from '../../services/control-access.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router, ParamMap, Params, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	employeeDetail:any=[];
	empId:String;
  date:any;
  status:string="";
  change:string="";
  a:any;
  empType:any;
  selectedcategory:any;
  empName:any;
  doj:any;
  designation:any;
  project:any;
  department:any;
  doe:any;
  existPro:any;
  newPro:any;
  appSign:any;
  dateCurr:any;

  constructor(private controlAccess:ControlAccessService, private router:Router, private route: ActivatedRoute, private modalService: BsModalService){
     
     
}

datepickerModel: Date;

public modalRef: BsModalRef;
employee:any;

 public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

 save(template:any){

 	const employee={
 		employeeID: this.empId,
     empType:this.empType,
     employeeName: this.empName,
     designation: this.designation,
     dateOfJoining: this.doj,
     dateOfExpiry: this.doe,
     project: this.project,
     department: this.department,
     existingProject: this.existPro,
     newProject: this.newPro,
     requestDate: this.dateCurr,
     prev: "Employee",
     current: "Supervisor"
 	}
 	this.controlAccess.save(employee).subscribe(data=>{

 	})

   this.openModalWithClass(template)
 	console.log(employee)
   this.router.navigate(['/dashboard']);
}

backit() {
    this.router.navigate(['/dashboard']);
    this.modalRef.hide();
}

back(temp:any) {
  this.openModalWithClass(temp)
}

// this.employeeDetail = {

//    "employeeID": detail.employeeID,
//    "employeeName": detail.employeeName,
//    "accessType": detail.accessType,
//    "designation":detail.designation,
//    "dateOfJoining":detail.dateOfJoining,
//    "dateOfExpiry":detail.dateOfExpiry,
//    "project":detail.project,
//    "department":detail.department,
//    "existingProject":detail.existingProject,
//    "newProject":detail.newProject
// }

//    this.controlAccess.save(this.employeeDetail).subscribe((data)=>{
 
//  })

   OnRadioButtonSelection()
{
  //this.radioChanged.emit(this.category);
  console.log(this.empType);
  this.selectedcategory=this.empType;
  this.a="";
}

 onChange() {
     //this.change = status;
     console.log(this.change)
   }

   ngOnInit()
   {
     this.route.paramMap
     .switchMap((params:ParamMap)=>this.controlAccess.getEmpSql(this.route.snapshot.params['value']))
     .subscribe(res=>{
       this.employee = res;
       this.empId = this.employee[0][0].EMPNO;
       this.empName = this.employee[0][0].NAME;
       this.doj = this.employee[0][0].DOJ;
       this.project = this.employee[0][0].PRACTICE;
       this.department = this.employee[0][0].OUTXT;
       console.log(this.employee[0][0])
     })

   	     this.date = new Date();
     let a=this.date.getDate();
     let b=this.date.getMonth()+1;
     let c=this.date.getFullYear();
      this.date=a+'/'+b+'/'+c;
   }

     public openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }

}