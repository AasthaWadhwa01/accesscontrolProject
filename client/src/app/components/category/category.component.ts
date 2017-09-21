import { Component, OnInit,Input,EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	category:string="";

	selectedcategory:string="";

  a:string="";

public modalRef: BsModalRef;

 public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

@Input('data') data:any;


  constructor(private modalService: BsModalService) { }

OnRadioButtonSelection()
{
	//this.radioChanged.emit(this.category);
	console.log(this.category);
	this.selectedcategory=this.category;
  this.a="";
}


onRadio(data)
{
  console.log('Data is here', data);
  this.a=data;
}




  ngOnInit() {
  	
  }

  public openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }

}
