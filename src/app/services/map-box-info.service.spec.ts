import { TestBed } from '@angular/core/testing';

import { MapBoxInfoService } from './map-box-info.service';

describe('MapBoxInfoService', () => {
  let service: MapBoxInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapBoxInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
