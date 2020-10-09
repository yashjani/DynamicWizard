import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicDiretive]'
})
export class DynamicDiretiveDirective {

  constructor( public viewContainerDef : ViewContainerRef) {
   }

}
