import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderedComponent } from './pizza-ordered.component';

describe('PizzaOrderedComponent', () => {
  let component: PizzaOrderedComponent;
  let fixture: ComponentFixture<PizzaOrderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOrderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
