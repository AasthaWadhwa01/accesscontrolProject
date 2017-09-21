import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostcardComponent } from './lostcard.component';

describe('LostcardComponent', () => {
  let component: LostcardComponent;
  let fixture: ComponentFixture<LostcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
