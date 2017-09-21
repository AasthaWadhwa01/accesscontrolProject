import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorformComponent } from './supervisorform.component';

describe('SupervisorformComponent', () => {
  let component: SupervisorformComponent;
  let fixture: ComponentFixture<SupervisorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
