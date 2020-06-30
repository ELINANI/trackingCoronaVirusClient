import { Component, OnInit } from '@angular/core';
import { MapBoxService } from '../services/map-box.service';
import { environment } from "src/environments/environment";
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  i:number = 0;
  constructor(public service:MapBoxService) { }
  map: mapboxgl;
  load(lng: DoubleRange, lat: DoubleRange, nombreCas: number, i:number) {
    this.map.addSource("pointsResource" + i, {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
      },
    });
    this.map.addLayer({
      id: "points" + i,
      source: "pointsResource" + nombreCas,
      type: "circle",
      paint: {
        "circle-radius": nombreCas,
        "circle-color": "#f00",
        "circle-stroke-color": "white",
      },
  
    });
  }
  ngOnInit(): void {

    this.service.getAll();
    mapboxgl.accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v8",
      center: [-6.603301, 34.2547121],
      zoom: 13,
    });
    this.map.on("load", () => {
      for (let item of this.service.mapBox) {
        this.i = this.i+1;
        this.load(item.lng, item.lat, item.nombreCas,this.i);
        console.log(item.lng,this.i);
      }
    });

  }

}
