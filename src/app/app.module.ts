import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { MapBoxInfoComponent } from './map-box-info/map-box-info.component';
import {MapBoxService} from './services/map-box.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MapBoxInfoService} from './services/map-box-info.service';
@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    MapBoxInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MapBoxService,MapBoxInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
