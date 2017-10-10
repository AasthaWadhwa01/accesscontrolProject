import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLostCardFormComponent } from './hr-lost-card-form.component';

describe('HrLostCardFormComponent', () => {
  let component: HrLostCardFormComponent;
  let fixture: ComponentFixture<HrLostCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrLostCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLostCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
