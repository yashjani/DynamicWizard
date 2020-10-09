import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicDiretiveDirective } from 'src/app/directives/dynamic-diretive.directive';
import { RoadMap, RoadMapGrid } from './road-map.module';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {

  @Input() roadMapGrid : RoadMapGrid;
  @ViewChild(DynamicDiretiveDirective, {static : true}) dynamicDirective : DynamicDiretiveDirective;
  roadMaps: Array<RoadMap>;
  currentStep: number = 0;
  percentageComplete : number;
  component:ComponentRef<any>;
  subscription:Array<Subscription>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){
    this.percentageComplete = 0;
    this.subscription = [];

  }

  ngOnInit(){
    this.roadMaps = this.roadMapGrid.roadMaps;
    this.subscription.push(this.roadMapGrid.roadMapSubject.subscribe((res)=>{
      this.loadComponent(res);
    }));
    this.roadMaps[this.currentStep]["active"] = true;
  }

  loadComponent(index : number){
    const roadMap:RoadMap = this.roadMapGrid.roadMaps[index];
      if(!roadMap){
        return;
      }

      if(this.component){
        this.component.destroy();
      }

      this.roadMapGrid.roadMaps[index]["active"] = true;
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(roadMap["component"]);
      let viewContainerRef = this.dynamicDirective.viewContainerDef;
      viewContainerRef.clear();
      this.component = viewContainerRef.createComponent(componentFactory);
      (<any>this.component).instance.roadMap = roadMap;
  }

  showRoadMap(index : number){
    if(!this.roadMaps[index]["active"]){
        this.loadComponent(index);
    }
  }

  setCurrentSetp(index:number){
    this.percentageComplete = index * (100 / (this.roadMaps.length - 1));
  }

  continue(){
    this.currentStep += 1;
    this.loadComponent(this.currentStep);
  }

}
