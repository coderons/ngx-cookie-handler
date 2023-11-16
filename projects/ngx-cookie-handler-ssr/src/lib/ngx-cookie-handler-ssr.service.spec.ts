import { TestBed } from '@angular/core/testing';

import { NgxCookieHandlerSsrService } from './ngx-cookie-handler-ssr.service';

describe('NgxCookieHandlerSsrService', () => {
  let service: NgxCookieHandlerSsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieHandlerSsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
