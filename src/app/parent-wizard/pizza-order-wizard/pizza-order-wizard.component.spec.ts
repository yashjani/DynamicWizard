import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderWizardComponent } from './pizza-order-wizard.component';

describe('PizzaWizardComponent', () => {
  let component: PizzaOrderWizardComponent;
  let fixture: ComponentFixture<PizzaOrderWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOrderWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
