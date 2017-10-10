import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorLostCardFormComponent } from './supervisor-lost-card-form.component';

describe('SupervisorLostCardFormComponent', () => {
  let component: SupervisorLostCardFormComponent;
  let fixture: ComponentFixture<SupervisorLostCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorLostCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorLostCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
