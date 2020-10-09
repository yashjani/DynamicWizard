import { Injectable } from '@angular/core';
import {Observable,of } from 'rxjs';
import { RoadMap } from '../roadMap/road-map/road-map.module';
import {ParentWizardComponent} from '../parent-wizard/parent-wizard.component';
import {PizzaOrderWizardComponent} from '../parent-wizard/pizza-order-wizard/pizza-order-wizard.component';
import {PizzaCheckoutWizardComponent} from '../parent-wizard/pizza-checkout-wizard/pizza-checkout-wizard.component';
import {PizzaOrderedComponent} from '../parent-wizard/pizza-ordered/pizza-ordered.component';
import {AbstractFactory} from './abstract.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService implements AbstractFactory{
 
  constructor() { }

  public get() : Observable<Array<any>>{
    return of([
      {
        name : 'Parent Wizard',
        component: ParentWizardComponent,
        active:false,
        nav:["Home"],
        header:["Pizz1"],
        footer:["Footer1"]
      },
      {
        name : 'Pizza Order Wizard',
        component: PizzaOrderWizardComponent,
        active:false,
        nav:["Pizza Order Wizard Navigation"],
        header:["Pizza Order Wizard Header"],
        footer:["Pizza Order Wizard Footer"]
      },
      {
        name : 'Pizza Checkout Wizard',
        component: PizzaCheckoutWizardComponent,
        active:false,
        nav:["Pizza Checkout Wizard Navigation"],
        header:["Pizza Checkout Wizard Header"],
        footer:["Pizza Checkout Wizard Footer"]
      },

      {
        name : 'Pizza Ordered Wizard',
        component: PizzaOrderedComponent,
        active:false,
        nav:["Pizza Ordered Wizard Navigation"],
        header:["Pizza Ordered Wizard Header"],
        footer:["Pizza Ordered Wizard Footer"]
      }
    ]);
  }

}
