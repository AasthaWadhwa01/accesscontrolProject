import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrformComponent } from './hrform.component';

describe('HrformComponent', () => {
  let component: HrformComponent;
  let fixture: ComponentFixture<HrformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
