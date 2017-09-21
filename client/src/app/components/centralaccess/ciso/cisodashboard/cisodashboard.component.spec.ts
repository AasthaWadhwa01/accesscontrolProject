import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisodashboardComponent } from './cisodashboard.component';

describe('CisodashboardComponent', () => {
  let component: CisodashboardComponent;
  let fixture: ComponentFixture<CisodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
