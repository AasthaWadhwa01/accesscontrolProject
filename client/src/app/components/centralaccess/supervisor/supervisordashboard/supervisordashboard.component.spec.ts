import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisordashboardComponent } from './supervisordashboard.component';

describe('SupervisordashboardComponent', () => {
  let component: SupervisordashboardComponent;
  let fixture: ComponentFixture<SupervisordashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisordashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
