import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisoformComponent } from './cisoform.component';

describe('CisoformComponent', () => {
  let component: CisoformComponent;
  let fixture: ComponentFixture<CisoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
