import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpModule],
     providers: [
       EmployeeService,
       { provide: XHRBackend, useClass: MockBackend },
     ]
   });
 });

describe('checking employee service', () => {
  it('can instantiate service when inject service',
   inject([EmployeeService], (service: EmployeeService) => {
     expect(service instanceof EmployeeService).toBe(true);
 }));


it('can instantiate service with "new"', inject([Http], (http: Http) => {
   expect(http).not.toBeNull('http should be provided');
   let service = new EmployeeService(http);
   expect(service instanceof EmployeeService).toBe(true, 'new service should be ok');
 }));


it('can provide the mockBackend as XHRBackend',
   inject([XHRBackend], (backend: MockBackend) => {
     expect(backend).not.toBeNull('backend should be provided');
 }));
});
});

 /*  it('Local login should return login credentials',
     inject([EmployeeService, XHRBackend], (EmployeeService, mockBackend) => {
       const mockResponse = { email: "abc@gmail.com", pwd: "12345" };




       mockBackend.connections.subscribe((connection) => {
         connection.mockRespond(new Response(new ResponseOptions({
           body: JSON.stringify(mockResponse)
         })));
       });

       loginService.findUser().subscribe((user) => {
         expect(user.email).toEqual('abc@gmail.com');
         expect(user.pwd).toEqual('12345');

       });

     }));*/

   