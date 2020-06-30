import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBoxInfoComponent } from './map-box-info.component';

describe('MapBoxInfoComponent', () => {
  let component: MapBoxInfoComponent;
  let fixture: ComponentFixture<MapBoxInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBoxInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBoxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
