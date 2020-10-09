import { Component, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadMap, RoadMapGrid } from '../roadMap/road-map/road-map.module';
import { PizzaCheckoutWizardComponent } from './pizza-checkout-wizard/pizza-checkout-wizard.component';
import { PizzaOrderWizardComponent } from './pizza-order-wizard/pizza-order-wizard.component';
import {typeMap} from '../services/abstract.model';

@Component({
  selector: 'app-parent-wizard',
  templateUrl: './parent-wizard.component.html',
  styleUrls: ['./parent-wizard.component.scss']
})
export class ParentWizardComponent implements OnInit {

    @Input() type;
   roadMaps: Array<RoadMap>;
   roadMapGrid: RoadMapGrid;
   promotionName:string;
   description: string;
   actionType=true;


  constructor(private router : Router, private route : ActivatedRoute, public injector : Injector) { }

  ngOnInit(): void {
    const injectable = typeMap.get(this.type);
    this.injector.get(injectable).get().subscribe(data => {
      this.roadMaps = (data);
      this.roadMapGrid = new RoadMapGrid(this.roadMaps);
      this.roadMapGrid.loadComponent(0);
    });

    
  }

  

}
