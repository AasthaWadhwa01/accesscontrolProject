//importing all required dependencies
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyComponent } from './third-party.component';

//Test suite for ThirdPartyComponent
describe('ThirdPartyComponent', () => {
  let component: ThirdPartyComponent;
  let fixture: ComponentFixture<ThirdPartyComponent>;

  //initiliazing test suite
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyComponent ]
    })
    .compileComponents();
  }));

  //initiliazing test suite
  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
