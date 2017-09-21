import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagecardComponent } from './damagecard.component';

describe('DamagecardComponent', () => {
  let component: DamagecardComponent;
  let fixture: ComponentFixture<DamagecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
