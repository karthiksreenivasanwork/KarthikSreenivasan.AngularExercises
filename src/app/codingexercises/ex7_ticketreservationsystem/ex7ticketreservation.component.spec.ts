import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7ticketreservationComponent } from './ex7ticketreservation.component';

describe('Ex7ticketreservationComponent', () => {
  let component: Ex7ticketreservationComponent;
  let fixture: ComponentFixture<Ex7ticketreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7ticketreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7ticketreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
