import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoLostCardFormComponent } from './cso-lost-card-form.component';

describe('CsoLostCardFormComponent', () => {
  let component: CsoLostCardFormComponent;
  let fixture: ComponentFixture<CsoLostCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsoLostCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsoLostCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
