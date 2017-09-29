import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';


import { NewAccessComponent } from './new-access.component';
import { EmployeeService } from '../../../services/employee.service';

describe('NewAccessComponent', () => {
  let component: NewAccessComponent;
  let fixture: ComponentFixture<NewAccessComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  //async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessComponent ], //declare the test component
      imports: [ FormsModule ],
      providers: [{
        provide: EmployeeService/*, useclass: FakeHeroService*/},
        { provide: Router/*, useclass: RouterStub*/ },
        { provide: ActivatedRoute },
        { provide: BsModalService }
      ]
    })
    .compileComponents(); //compile template and css
  }));

  //synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessComponent);
    component = fixture.componentInstance; //NewAccessComponent test instance
    
    /*de = fixture.debugElement.query(By.css('h5'));
    el = de.nativeElement;*/
  });

    it('should NOT have heroes before ngOnInit', () => {
    expect(component.config).toBe(0,
      'should not have heroes before ngOnInit');
  });

  it('should NOT have heroes immediately after ngOnInit', () => {
    fixture.detectChanges(); // runs initial lifecycle hooks

    expect(component.config.length).toBe(0,
      'should not have heroes until service promise resolves');
  });


})