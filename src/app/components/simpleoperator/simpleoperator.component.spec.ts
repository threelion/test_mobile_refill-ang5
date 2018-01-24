import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleoperatorComponent } from './simpleoperator.component';

describe('SimpleoperatorComponent', () => {
  let component: SimpleoperatorComponent;
  let fixture: ComponentFixture<SimpleoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
