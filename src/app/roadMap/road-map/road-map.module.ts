import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadMapComponent } from './road-map.component';
import { Subject } from 'rxjs';

export interface RoadMap{
  data:any;
}


export class RoadMapGrid{
  roadMaps : Array<RoadMap>;
  roadMapSubject : Subject<any>;
  constructor(roadMaps : Array<RoadMap>){
    this.roadMaps = roadMaps;
    this.roadMapSubject = new Subject<any>();
  }

  loadComponent(roadMap : number){
    this.roadMapSubject.next(roadMap);
  }

}

