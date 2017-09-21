import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acesstype',
  templateUrl: './acesstype.component.html',
  styleUrls: ['./acesstype.component.css']
})
export class AcessTypeComponent implements OnInit {

	@Output('selectedData') outputSelectedValue = new EventEmitter<any>();
  data:string="";

  constructor() {}


  ngOnInit() {
  }

  onCasechange(){
    console.log('Radio is selected...',this.data);
    this.outputSelectedValue.emit(this.data);
  }

}
