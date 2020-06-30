import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { MapBox } from '../models/map-box';
 @Injectable({
  providedIn: 'root'
})
export class MapBoxService {
  url ="https://localhost:5001/api/mapbox";
  mapBox:MapBox[];

  constructor( public http:HttpClient) { }
  public getAll(){
    this.http.get(this.url).toPromise().then(res =>{
      this.mapBox = res as MapBox[];
    })
  }
}
