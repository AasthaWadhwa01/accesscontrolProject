import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessformsComponent } from './accessforms.component';

describe('AccessformsComponent', () => {
  let component: AccessformsComponent;
  let fixture: ComponentFixture<AccessformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
