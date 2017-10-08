import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpModule],
     providers: [EmployeeService, { provide: XHRBackend, useClass: MockBackend }]
   });
 });

//test suit for service class
describe('checking employee service', () => {
  //test case for mocking service class 
   it('Local login should return login credentials',
     inject([EmployeeService, XHRBackend], (EmployeeService, mockBackend) => {
       const mockResponse = { employeeID: "50042987", project: "SSB-ADM" };

       mockBackend.connections.subscribe((connection) => {
         connection.mockRespond(new Response(new ResponseOptions({
           body: JSON.stringify(mockResponse)
         })));
       });

       EmployeeService.save().subscribe((empObject) => {
         expect(empObject.employeeID).toEqual('50042987');
         expect(empObject.project).toEqual('SSB-ADM');
       });
     }));

//testcase for making instance of service class
  it('can instantiate service when inject service',
   inject([EmployeeService], (service: EmployeeService) => {
     expect(service instanceof EmployeeService).toBe(true);
 }));

// testcase for making instance with new keyword
it('can instantiate service with "new"', inject([Http], (http: Http) => {
   expect(http).not.toBeNull('http should be provided');
   let service = new EmployeeService(http);
   expect(service instanceof EmployeeService).toBe(true, 'new service should be ok');
 }));

//testcase for verifying that actual backend and mockclass are same
it('can provide the mockBackend as XHRBackend',
   inject([XHRBackend], (backend: MockBackend) => {
     expect(backend).not.toBeNull('backend should be provided');
 }));
});
});





   