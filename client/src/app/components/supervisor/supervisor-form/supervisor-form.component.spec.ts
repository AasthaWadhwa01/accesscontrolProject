import { async, inject,ComponentFixture,fakeAsync, TestBed,tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/observable/of'

import { EmployeeService } from '../../../services/employee.service';
import { SupervisorFormComponent } from './supervisor-form.component';

describe(' SupervisorFormComponent', () => {
  let data: any;
  let component:SupervisorFormComponent;
  let fixture: ComponentFixture < SupervisorFormComponent > ;
  let id,name,de:DebugElement;
  let elID,elNAME,el:HTMLElement;
  let service;
  let spy;
  let test = {
    "response": { "n": 1, "ok": 1, "nModified": 1 },
    "data": { "response": "category already exixts" },
    "prev": { "prev": "Supervisor" },
    "current": { "current": "Hr" },
    "negativeResponse": { "ok": "0", "nModified": "0", "n": "0" },
    "categoryResponse": { "Response": "category Name alerady exist" }
  };
  
  //initializing the test suite
  beforeEach(async(() => {
    //initializing the router stub for routing
    class RouterStub {
      navigate(url: string) { return url; }
    }

    data = test.response;

    TestBed.configureTestingModule({
      declarations: [SupervisorFormComponent], //declarations for test component
      imports:[BrowserModule,HttpModule,FormsModule], //All Predefined Modules
      providers:[{provide:EmployeeService},{ provide: Router, useClass: RouterStub},{provide:ActivatedRoute},{provide:BsModalService}]
    })

    
    .compileComponents() // compile template and css
    .then(() => {
      fixture = TestBed.createComponent(SupervisorFormComponent); //create 
      component = fixture.componentInstance;

      // query for the title <h1> by CSS element selector
      id = fixture.debugElement.query(By.css('.id'));
      elID =id.nativeElement;

      name = fixture.debugElement.query(By.css('.name'));
      elNAME =name.nativeElement;
      fixture.detectChanges();
    });
  }));

  //Test Case For Component Will Work Correct 
  it('Display Component Will Work Correctly', () => {
    expect(component).toBeDefined(SupervisorFormComponent);
  });

  //Test Case For EmployeeId field Will Correct 
  it('Display Employee Id Correctly', () => {   
    fixture.detectChanges();    
    expect(elID.textContent).toContain(component.config.supervisorform.EMPP_ID);
  });

  //Test Case For EmployeeName field Will Correct 
  it('Display Employee Name Correctly', () =>{
    component.config.supervisorform.NAME ='Shubhang';
    fixture.detectChanges();    
    expect(elNAME.textContent).toContain('Shubhang');
  });    

  //Test Case For EmployeeId field Will Not Correct
  it('Display Employee Id Not Correct ', () => {
    component.config.supervisorform.EMPP_ID =50042924;
    fixture.detectChanges();    
    expect(elID.textContent).not.toContain('50042925');
  });

  //Test Case For EmployeeName field Will Not Correct
  it('Display Employee Name Not Correct', () => {
    component.config.supervisorform.NAME ='Shubhang';
    fixture.detectChanges();    
    expect(elNAME.textContent).not.toContain('Shubhang Gupta');
  }); 


});
