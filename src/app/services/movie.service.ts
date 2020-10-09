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
export class MovieService implements AbstractFactory {

  constructor() { }

  public get() : Observable<Array<any>>{
    return of([
      {
        name : 'Parent Wizard',
        component: ParentWizardComponent,
        active:false,
        nav:["Home"],
        header:["Movie1"],
        footer:["Footer1"]
      },
      {
        name : 'Movie Order Wizard',
        component: PizzaOrderWizardComponent,
        active:false,
        nav:["Movie Order Wizard Navigation"],
        header:["Movie Order Wizard Header"],
        footer:["Movie Order Wizard Footer"]
      },
      {
        name : 'Movie Checkout Wizard',
        component: PizzaCheckoutWizardComponent,
        active:false,
        nav:["Movie Checkout Wizard Navigation"],
        header:["Movie Checkout Wizard Header"],
        footer:["Movie Checkout Wizard Footer"]
      },

      {
        name : 'Movie Ordered Wizard',
        component: PizzaOrderedComponent,
        active:false,
        nav:["Movie Ordered Wizard Navigation"],
        header:["Movie Ordered Wizard Header"],
        footer:["Movie Ordered Wizard Footer"]
      }
    ]);
  }

}
