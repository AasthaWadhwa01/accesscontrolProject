import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsodashboardComponent } from './csodashboard.component';

describe('CsodashboardComponent', () => {
  let component: CsodashboardComponent;
  let fixture: ComponentFixture<CsodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
