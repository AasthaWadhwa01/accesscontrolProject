//importing all required dependencies
import { async, fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BsModalService} from 'ngx-bootstrap/modal'
import 'rxjs/add/observable/of';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LocationChangeComponent } from './location-change.component';
import { LocationChangeService } from '../../../services/location-change.service';

//Test suite for LocationChangeComponent
describe('LocationchangeComponent', () => {
  let component: LocationChangeComponent;
  let fixture: ComponentFixture < LocationChangeComponent > ;
  let de: DebugElement;
  let el: HTMLElement;
  let spy: jasmine.Spy;
  let spy1: jasmine.Spy;
  let heroEl: DebugElement;
  let locationChangeService: LocationChangeService; // the actually injected service
  const testQuote = {employeeId:'50042930',empName:'prashant'};

  //router stub for stubbing the data
  class RouterStub {
    navigate(url: string[]) { return url; }
  }

  //initializing the test suite
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, HttpModule],
        declarations: [LocationChangeComponent],
        providers: [LocationChangeService, { provide: Router, useClass: RouterStub }, { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } }, paramMap: Observable.of({get: () => 1}) } } ,{provide:BsModalService}]
      })
      .compileComponents();
  }));

  //initializing the test suite
  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChangeComponent);
    component = fixture.componentInstance;

    // TwainService actually injected into the component
    locationChangeService = fixture.debugElement.injector.get(LocationChangeService);

    //  Setup spy on the `locationChangeMethod` method
    spy = spyOn(locationChangeService, 'locationChangeMethod')
      .and.returnValue(Observable.of(testQuote));
    fixture.detectChanges();
  });

  //test case for component creation
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  //test case which should show quote after getQuote promise
  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();

    // wait for async locationchange method
    tick(); 

    // update view with quote
    fixture.detectChanges(); 
    expect(testQuote.employeeId).toEqual('50042930');
    expect(testQuote.empName).toEqual('prashant');
  }));

  //test case which should call back button function on click event
  it('should call back button function on click event', fakeAsync(() => {
    spyOn(component, 'back');
    heroEl = fixture.debugElement.query(By.css('.myBtn'));
    heroEl.triggerEventHandler('click', null);
    expect(component.back).toHaveBeenCalled();
  }));

  //test case for navigation method
  it('navigate method should be called', inject([Router], (router: Router) => {
    spy1 = spyOn(router, 'navigate');
    expect(component).toBeTruthy();
    de = fixture.debugElement.query(By.css('.submit'))
    el = de.nativeElement;
    el.click();
    expect(spy1.calls.any()).toBe(true, "router service called");
  }));

  //test case for submit button
  it('Navigate when user click on submit',
    inject([Router], (router: Router) => {
      spy1 = spyOn(router, 'navigate');
      de = fixture.debugElement.query(By.css('.submit'))
      el = de.nativeElement;
      el.click();
      const navArgs = spy1.calls.first().args[0];
      expect(navArgs).toContain('/empdash');
    }));

  it('Navigate when user click on back button',
    inject([Router], (router: Router) => {
      spy1 = spyOn(router, 'navigate');
      de = fixture.debugElement.query(By.css('.myBtn'))
      el = de.nativeElement;
      el.click();
      const navArgs = spy1.calls.first().args[0];
      expect(navArgs).toContain('/empdash');
    }));
})

