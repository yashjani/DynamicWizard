import { MovieService } from './movie.service';
import { PastaService } from './pasta.service';
import { PizzaService } from './pizza.service';


export interface AbstractFactory {
    get(): any;
  }
  
  export const typeMap = new Map([
    ['PASTA', PastaService],
    ['PIZZA', PizzaService],
    ['MOVIE', MovieService]
  ]);
  