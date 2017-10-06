import { async, inject,ComponentFixture,fakeAsync, TestBed,tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../../../services/employee.service';
import { SupervisorFormComponent } from './supervisor-form.component';
import { BrowserModule } from '@angular/platform-browser';
import {  ActivatedRouteStub } from './routerstub'
import 'rxjs/add/observable/of'


describe(' SupervisorFormComponent', () => {
  let data: any;
  let component:SupervisorFormComponent;
  let fixture: ComponentFixture < SupervisorFormComponent > ;
  let id,name,de:DebugElement;
  let elID,elNAME,el:HTMLElement;
  let service;
  let spy1;
  let test = {
    "response": { "n": 1, "ok": 1, "nModified": 1 },
    "data": { "res": "category already exixts" },
    "prev": { "prev": "Supervisor" },
    "current": { "current": "Hr" },
    "negativeResponse": { "ok": "0", "nModified": "0", "n": "0" },
    "categoryResponse": { "Response": "category Name alerady exist" }

  };
  
  //initializing the test suite
  beforeEach(async(() => {
    class RouterStub {
      navigate(url: string) { return url; }
    }
 
    data = test.response;
    TestBed.configureTestingModule({
      declarations: [SupervisorFormComponent, SupervisorFormComponent],
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule
      ],
      providers: [
      {provide:EmployeeService},{ provide: Router, useClass: RouterStub }
,{provide:ActivatedRoute},{provide:BsModalService}
        
              ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SupervisorFormComponent);
      component = fixture.componentInstance;
        // query for the title <h1> by CSS element selector
   

    id = fixture.debugElement.query(By.css('.id'));
    elID =id.nativeElement;

     name = fixture.debugElement.query(By.css('.name'));
    elNAME =name.nativeElement;


    fixture.detectChanges();
      fixture.detectChanges();
      service = fixture.debugElement.injector.get(SupervisorFormComponent);
      spy1 = spyOn(service, 'accept').and.returnValue(Observable.of(data));


    });
  }));

 it('should have a defined component', () => {
        expect(component).toBeDefined(SupervisorFormComponent);
  });

  

   it('should display Employee Id', () => 
  {
    
     fixture.detectChanges();    
     expect(elID.textContent).toContain(component.config.supervisorform.EMPP_ID);
   
   });
     it('should display Employee Name', () => 
  {
    component.config.supervisorform.NAME ='Shubhang';
     fixture.detectChanges();    
     expect(elNAME.textContent).toContain('Shubhang');
   
   });    

  
  it('should not correct Employee Id', () => 
  {
    component.config.supervisorform.EMPP_ID =50042924;
     fixture.detectChanges();    
     expect(elID.textContent).not.toContain('50042925');
   
   });
    it('should not correct Employee Name', () => 
  {
    component.config.supervisorform.NAME ='Shubhang';
     fixture.detectChanges();    
     expect(elNAME.textContent).not.toContain('Shubhang Gupta');
   
   }); 


});
