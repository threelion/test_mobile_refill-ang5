import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountinputComponent } from './amountinput.component';

describe('AmountinputComponent', () => {
  let component: AmountinputComponent;
  let fixture: ComponentFixture<AmountinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
