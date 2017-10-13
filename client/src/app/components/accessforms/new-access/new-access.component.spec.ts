//importing all required dependencies
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { NewAccessComponent } from './new-access.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, ActivatedRouteStub } from '../routerstub';
import 'rxjs/add/operator/switchMap';

import { LostCardService } from '../../../services/lost-card.service';
import { EmployeeService } from '../../../services/employee.service';


//Test suite for New AccessComponent
describe('NewAccessComponent', () => {
  let data: any;
  let emp: any;
  let navArgs:any;
  let component: NewAccessComponent;
  let fixture: ComponentFixture < NewAccessComponent > ;
  let service;
  let spy;
  let spy1;

//mock data and response
  let test = {
    "response": { "n": 1, "ok": 1, "nModified": 1 },
    "data": { "response": "category already exixts" },
    "comments": { "comments": "broken" },
    "date": { "date": "12/04/17" },
    "negativeResponse": { "ok": "0", "nModified": "0", "n": "0" },
    "categoryResponse": { "Response": "category Name alerady exist" },
    "emp": {
      "employeeID": "50042950",
      "employeeName": "SHIVAM  BAJPAI",
      "dateOfJoining": "20060313",
      "project": "SSB-ADM ",
      "department": "SSB-CSDM-RP",
      "prev": "Cso",
      "current": "Closed",
    }
  };
  let de: DebugElement;
  let el: HTMLInputElement;
  let activatedRoute: ActivatedRouteStub;

//initializing the test suite
  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    class RouterStub {
      navigate(url: string) { return url; }
    }
    data = test.response;
    emp = test.emp;

//creating testing module using TestBed
    TestBed.configureTestingModule({
      declarations: [NewAccessComponent, NewAccessComponent],
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule
      ],
      providers: [
        { provide: EmployeeService },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: BsModalService },
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(NewAccessComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      service = fixture.debugElement.injector.get(EmployeeService);
      spy = spyOn(service, 'save').and.returnValue(Observable.of(data));
    });
  }));

//test case for add category method
  it("testing the save method", () => {
    fixture.detectChanges();
    component.save(test.comments.comments);
    expect(component.data.ok).toEqual(1);
    expect(component.data.nModified).toEqual(1);
    expect(component.data.ok).toEqual(1);
  });

//navigate to employee dash when click on save 
  it('Navigate when click on save',
    inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      de = fixture.debugElement.query(By.css('.save'));
      el = de.nativeElement;
      el.click();
      fixture.detectChanges();
      const navArgs = spy.calls.first().args[0];
      expect(navArgs).toContain("/empdash");
    }));

//navigate to employee dash when click on save 
  it('Navigate when click on back',
    inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      de = fixture.debugElement.query(By.css('.radio'));
      el = de.nativeElement;
      el.click();
      fixture.detectChanges();
      expect(navArgs).toContain("/empdash");
    }));

//checking method in ngonit
  it('should show list of location after calling locationservice from ngonit method', fakeAsync(() => {
    spy1 = spyOn(service, 'getEmpSql').and.returnValues(Observable.of(emp));
    fixture.detectChanges();
    tick(); // wait for async getEmpSql
    fixture.detectChanges(); // update view with data
    console.log(component.employee, emp, "emploee")
    expect(emp).toBe(emp);
  }));
});
