import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewAccessComponent } from './new-access.component';

describe('NewAccessComponent', () => {
  let component: NewAccessComponent;
  let fixture: ComponentFixture<NewAccessComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  //async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessComponent ] //declare the test component
    })
    .compileComponents(); //compile template and css
  }));

  //synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessComponent);
    component = fixture.componentInstance; //NewAccessComponent test instance
    
    de = fixture.debugElement.query(By.css('h5'));
    el = de.nativeElement;
  });


})