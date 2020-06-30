import { Component, OnInit } from '@angular/core';
import { MapBoxInfoService } from '../services/map-box-info.service';
import { MapBoxService } from '../services/map-box.service';
@Component({
  selector: 'app-map-box-info',
  templateUrl: './map-box-info.component.html',
  styleUrls: ['./map-box-info.component.css']
})
export class MapBoxInfoComponent implements OnInit {
  filter:string;
  constructor(public service:MapBoxInfoService,public mapBox:MapBoxService) { }

  ngOnInit(): void {
    this.service.getAllCasVoid();
    this.service.GetHommeCasVoid();
    this.service.GetFemmeCasVoid();
    this.service.GetEnfantCasVoid();
    this.service.GetVieuxCasVoid();
    this.mapBox.getAll();
  }
  search(){
    if(this.filter != ""){
      this.mapBox.mapBox = this.mapBox.mapBox.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.filter.toLocaleLowerCase());
      });
    }else if(this.filter =="")
    {
       this.mapBox.getAll();
    }   
  }
}
