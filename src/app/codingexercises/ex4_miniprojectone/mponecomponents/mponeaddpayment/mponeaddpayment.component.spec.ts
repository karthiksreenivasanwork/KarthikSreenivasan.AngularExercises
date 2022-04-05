import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MponeaddpaymentComponent } from './mponeaddpayment.component';

describe('MponeaddpaymentComponent', () => {
  let component: MponeaddpaymentComponent;
  let fixture: ComponentFixture<MponeaddpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MponeaddpaymentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MponeaddpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
