import { TestBed, async, inject } from '@angular/core/testing';
import {HttpModule,Http,Response,ResponseOptions,XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DamagedCardService } from './damaged-card.service';

<<<<<<< HEAD
describe('DamagedCardService', () => {
=======
describe('DamagedCardService testing', () => {
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DamagedCardService,
<<<<<<< HEAD
        { provide: XHRBackend, useClass: MockBackend },
      ]
          });

  });

    describe('damage()', () => {
    it('Employee Name Should be equal',
        inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
            { comments: "hello", date: "27/09/2017" },
            { comments: "hiiii", date: "28/10/2017" }];
       mockBackend.connections.subscribe((connection) => {
=======
      { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('test case to check damage() method', () => {

    //Test Case to check whether the data is mocked correctly for method damage of DamagedCardService
    it('Employee Name Should be equal',
      inject([DamagedCardService, XHRBackend], (damagedCardService, mockBackend) => {
        const mockResponse = [
        { comments: "hello", date: "27/09/2017" },
        { comments: "hiiii", date: "28/10/2017" }];
        mockBackend.connections.subscribe((connection) => {
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
<<<<<<< HEAD
        DamagedCardService.damage().subscribe((employees) => {
          expect(employees.length).toBe(2);
          expect(employees[0].comments).toEqual('hello');
          expect(employees[1].comments).toEqual('hiiii');
         });
    }));
     it('Employee Name Should not be equal',
        inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
      { comments: "nishtha", date: "25/11/2017" }];
=======
        damagedCardService.damage().subscribe((employees) => {
          expect(employees.length).toBe(2);
          expect(employees[0].comments).toEqual('hello');
          expect(employees[0].date).toEqual('27/09/2017');
          expect(employees[1].comments).toEqual('hiiii');
          expect(employees[1].date).toEqual('28/10/2017');
        });
      }));

    //Test Case when data is not mocked correctly for method damage of DamagedCardService
    it('Employee Name Should not be equal',
      inject([DamagedCardService, XHRBackend], (damagedCardService, mockBackend) => {
        const mockResponse = [

        { comments: "nishtha", date: "25/11/2017" }];
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
<<<<<<< HEAD
        DamagedCardService.damage().subscribe((employees) => {
          expect(employees.length).toBe(1);
          expect(employees[0].comments).not.toEqual('nishha');
         });
    }));
  });
    describe('getDamageCard()', () => {
    it('Employee Name Should be equal',
        inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
            { comments: "hello", date: "27/09/2017" },
            { comments: "hiiii", date: "28/10/2017" }];
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
         })));
=======
        damagedCardService.damage().subscribe((employees) => {
          expect(employees.length).toBe(1);

          expect(employees[0].comments).not.toEqual('nishha');
        });
      }));
  });

  describe('test to check getDamageCard() method', () => {

    //Test Case to check whether the data is mocked correctly for method getDamageCard of DamagedCardService
    it('Employee Name Should be equal',
      inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
        { comments: "hello", date: "27/09/2017" },
        { comments: "hiiii", date: "28/10/2017" }];
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
        });
        DamagedCardService.getDamageCard().subscribe((employees) => {
          expect(employees.length).toBe(2);
          expect(employees[0].comments).toEqual('hello');
<<<<<<< HEAD
          expect(employees[1].comments).toEqual('hiiii');
         });
    }));

     it('Employee Name Should not be equal',
        inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
           { comments: "nishtha", date: "25/11/2017" }];
=======
          expect(employees[0].date).toEqual('27/09/2017');
          expect(employees[1].comments).toEqual('hiiii');
          expect(employees[1].date).toEqual('28/10/2017');
        });
      }));

    //Test Case when data is not mocked correctly for method damage of DamagedCardService
    it('Employee Name Should not be equal',
      inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
        { comments: "nishtha", date: "25/11/2017" }];
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        DamagedCardService.getDamageCard().subscribe((employees) => {
          expect(employees.length).toBe(1);
<<<<<<< HEAD
        expect(employees[0].comments).not.toEqual('nishha');
      });
    }));
  });
=======
          expect(employees[0].comments).not.toEqual('nishha');
        });
      }));
>>>>>>> d4dd055dd29f496a89523776fb24ce91b3a12999
  });
});
