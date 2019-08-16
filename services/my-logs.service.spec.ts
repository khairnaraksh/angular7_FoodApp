import { TestBed } from '@angular/core/testing';

import { MyLogsService } from './my-logs.service';

describe('MyLogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLogsService = TestBed.get(MyLogsService);
    expect(service).toBeTruthy();
  });
});
