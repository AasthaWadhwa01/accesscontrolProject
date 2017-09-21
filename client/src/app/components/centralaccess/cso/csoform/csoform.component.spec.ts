import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoformComponent } from './csoform.component';

describe('CsoformComponent', () => {
  let component: CsoformComponent;
  let fixture: ComponentFixture<CsoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
