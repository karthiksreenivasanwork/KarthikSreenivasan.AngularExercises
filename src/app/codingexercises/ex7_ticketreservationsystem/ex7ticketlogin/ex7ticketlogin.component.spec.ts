import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7ticketloginComponent } from './ex7ticketlogin.component';

describe('Ex7ticketloginComponent', () => {
  let component: Ex7ticketloginComponent;
  let fixture: ComponentFixture<Ex7ticketloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7ticketloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7ticketloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
