import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedCardComponent } from './damaged-card.component';

describe('DamagedCardComponent', () => {
  let component: DamagedCardComponent;
  let fixture: ComponentFixture<DamagedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
