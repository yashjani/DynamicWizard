import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadMapComponent } from './roadMap/road-map/road-map.component';
import { DynamicDiretiveDirective } from './directives/dynamic-diretive.directive';
import { ParentWizardComponent } from './parent-wizard/parent-wizard.component';
import { PizzaOrderWizardComponent } from './parent-wizard/pizza-order-wizard/pizza-order-wizard.component';
import { PizzaCheckoutWizardComponent } from './parent-wizard/pizza-checkout-wizard/pizza-checkout-wizard.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { PizzaOrderedComponent } from './parent-wizard/pizza-ordered/pizza-ordered.component';
import { PizzaService } from './services/pizza.service';
import { PastaService } from './services/pasta.service';
import { MovieService } from './services/movie.service';
@NgModule({
  declarations: [
    AppComponent,
    RoadMapComponent,
    DynamicDiretiveDirective,
    ParentWizardComponent,
    PizzaOrderWizardComponent,
    PizzaCheckoutWizardComponent,
    PizzaOrderedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule.forRoot()
  ],
  providers: [PizzaService,PastaService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
