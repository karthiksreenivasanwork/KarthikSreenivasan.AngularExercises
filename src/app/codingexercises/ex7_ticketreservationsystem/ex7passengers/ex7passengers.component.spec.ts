import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7passengersComponent } from './ex7passengers.component';

describe('Ex7passengersComponent', () => {
  let component: Ex7passengersComponent;
  let fixture: ComponentFixture<Ex7passengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7passengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7passengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
