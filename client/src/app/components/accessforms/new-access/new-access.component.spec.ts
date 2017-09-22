import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessComponent } from './new-access.component';

describe('NewAccessComponent', () => {
  let component: NewAccessComponent;
  let fixture: ComponentFixture<NewAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
