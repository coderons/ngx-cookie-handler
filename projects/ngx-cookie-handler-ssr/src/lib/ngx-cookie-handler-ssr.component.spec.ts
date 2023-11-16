import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieHandlerSsrComponent } from './ngx-cookie-handler-ssr.component';

describe('NgxCookieHandlerSsrComponent', () => {
  let component: NgxCookieHandlerSsrComponent;
  let fixture: ComponentFixture<NgxCookieHandlerSsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCookieHandlerSsrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCookieHandlerSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
