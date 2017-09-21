import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralaccessComponent } from './centralaccess.component';

describe('CentralaccessComponent', () => {
  let component: CentralaccessComponent;
  let fixture: ComponentFixture<CentralaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
