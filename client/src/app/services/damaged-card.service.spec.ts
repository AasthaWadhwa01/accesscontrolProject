import { TestBed, async, inject } from '@angular/core/testing';
import {HttpModule,Http,Response,ResponseOptions,XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DamagedCardService } from './damaged-card.service';

describe('DamagedCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DamagedCardService,
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
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
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
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
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
        });
        DamagedCardService.getDamageCard().subscribe((employees) => {
          expect(employees.length).toBe(2);
          expect(employees[0].comments).toEqual('hello');
          expect(employees[1].comments).toEqual('hiiii');
         });
    }));

     it('Employee Name Should not be equal',
        inject([DamagedCardService, XHRBackend], (DamagedCardService, mockBackend) => {
        const mockResponse = [
           { comments: "nishtha", date: "25/11/2017" }];
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        DamagedCardService.getDamageCard().subscribe((employees) => {
          expect(employees.length).toBe(1);
        expect(employees[0].comments).not.toEqual('nishha');
      });
    }));
  });
  });

