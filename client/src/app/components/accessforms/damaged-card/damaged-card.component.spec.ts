import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { DamagedCardComponent } from './damaged-card.component';
import { DamagedCardService } from '../../../services/damaged-card.service'


describe('DamagedCardComponent', () => {
  let component: DamagedCardComponent;
  let fixture: ComponentFixture<DamagedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedCardComponent ],
      imports:[FormsModule,  Http],
      providers: [ DamagedCardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
