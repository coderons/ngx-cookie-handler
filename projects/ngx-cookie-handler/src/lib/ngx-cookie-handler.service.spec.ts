import { TestBed } from '@angular/core/testing';

import { NgxCookieHandlerService } from './ngx-cookie-handler.service';

describe('NgxCookieHandlerService', () => {
  let service: NgxCookieHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
