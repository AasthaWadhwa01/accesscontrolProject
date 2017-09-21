import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationchangeComponent } from './locationchange.component';

describe('LocationchangeComponent', () => {
  let component: LocationchangeComponent;
  let fixture: ComponentFixture<LocationchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
