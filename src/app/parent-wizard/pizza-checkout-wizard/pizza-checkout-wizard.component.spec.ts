import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCheckoutWizardComponent } from './pizza-checkout-wizard.component';

describe('PizzaCheckoutWizardComponent', () => {
  let component: PizzaCheckoutWizardComponent;
  let fixture: ComponentFixture<PizzaCheckoutWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCheckoutWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCheckoutWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
