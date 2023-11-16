import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieHandlerComponent } from './ngx-cookie-handler.component';

describe('NgxCookieHandlerComponent', () => {
  let component: NgxCookieHandlerComponent;
  let fixture: ComponentFixture<NgxCookieHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCookieHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCookieHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
