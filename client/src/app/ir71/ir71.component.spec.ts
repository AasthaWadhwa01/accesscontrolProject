import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ir71Component } from './ir71.component';

describe('Ir71Component', () => {
  let component: Ir71Component;
  let fixture: ComponentFixture<Ir71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ir71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ir71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
