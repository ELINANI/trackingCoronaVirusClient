import { Injectable } from '@angular/core';
import { MapBoxInfo } from '../models/map-box-info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapBoxInfoService {
  getAllCas:MapBoxInfo;
  GetHommeCas:MapBoxInfo;
  GetFemmeCas:MapBoxInfo;
  GetEnfantCas:MapBoxInfo;
  GetVieuxCas:MapBoxInfo;
  getAllCasUrl="https://localhost:5001/api/trait/getAllCas";
  GetHommeCasUrl = "https://localhost:5001/api/trait/GetHommeCas";
  GetFemmeCasUrl="https://localhost:5001/api/trait/GetFemmeCas";
  GetEnfantCasUrl="https://localhost:5001/api/trait/GetEnfantCas";
  GetVieuxCasUrl="https://localhost:5001/api/trait/GetVieuxCas";
  constructor(public http:HttpClient) { }

  public getAllCasVoid(){
    this.http.get(this.getAllCasUrl).toPromise().then(res=> {
       this.getAllCas = res as MapBoxInfo ;
    })
  }
  public GetHommeCasVoid(){
    this.http.get(this.GetHommeCasUrl).toPromise().then(res=> {
       this.GetHommeCas = res as MapBoxInfo ;
    })
  }
  public GetFemmeCasVoid(){
    this.http.get(this.GetFemmeCasUrl).toPromise().then(res=> {
       this.GetFemmeCas = res as MapBoxInfo ;
    })
  }
  public GetVieuxCasVoid(){
    this.http.get(this.GetVieuxCasUrl).toPromise().then(res=> {
       this.GetVieuxCas = res as MapBoxInfo ;
    })
  }
  public GetEnfantCasVoid(){
    this.http.get(this.GetEnfantCasUrl).toPromise().then(res=> {
       this.GetEnfantCas = res as MapBoxInfo ;
    })
  }
}
