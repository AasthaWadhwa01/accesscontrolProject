import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorFormComponent } from './supervisor-form.component';

describe('SupervisorFormComponent', () => {
  let component: SupervisorFormComponent;
  let fixture: ComponentFixture<SupervisorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
