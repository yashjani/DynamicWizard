import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { RoadMap } from '../roadMap/road-map/road-map.module';
import {ParentWizardComponent} from '../parent-wizard/parent-wizard.component';
import {PizzaOrderWizardComponent} from '../parent-wizard/pizza-order-wizard/pizza-order-wizard.component';
import {PizzaCheckoutWizardComponent} from '../parent-wizard/pizza-checkout-wizard/pizza-checkout-wizard.component';
import {PizzaOrderedComponent} from '../parent-wizard/pizza-ordered/pizza-ordered.component';
import {AbstractFactory} from './abstract.model';

@Injectable({
  providedIn: 'root'
})
export class PastaService implements AbstractFactory  {

  constructor() { }

  public get() : Observable<Array<any>>{
    return of([
      {
        name : 'Parent Wizard',
        component: ParentWizardComponent,
        active:false,
        nav:["Home"],
        header:["Pasta1"],
        footer:["Footer1"]
      },
      {
        name : 'Pasta Order Wizard',
        component: PizzaOrderWizardComponent,
        active:false,
        nav:["Pasta Order Wizard Navigation"],
        header:["Pasta Order Wizard Header"],
        footer:["Pasta Order Wizard Footer"]
      },
      {
        name : 'Pasta Checkout Wizard',
        component: PizzaCheckoutWizardComponent,
        active:false,
        nav:["Pasta Checkout Wizard Navigation"],
        header:["Pasta Checkout Wizard Header"],
        footer:["Pasta Checkout Wizard Footer"]
      },

      {
        name : 'Pasta Ordered Wizard',
        component: PizzaOrderedComponent,
        active:false,
        nav:["Pasta Ordered Wizard Navigation"],
        header:["Pasta Ordered Wizard Header"],
        footer:["Pasta Ordered Wizard Footer"]
      }
    ]);
  }

}
