import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MponelistpaymentsComponent } from './mponelistpayments.component';

describe('MponelistproductsComponent', () => {
  let component: MponelistpaymentsComponent;
  let fixture: ComponentFixture<MponelistpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MponelistpaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MponelistpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
