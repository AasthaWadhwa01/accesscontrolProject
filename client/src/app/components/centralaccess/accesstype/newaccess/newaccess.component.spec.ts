import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccessComponent } from './newaccess.component';

describe('NewaccessComponent', () => {
  let component: NewaccessComponent;
  let fixture: ComponentFixture<NewaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
