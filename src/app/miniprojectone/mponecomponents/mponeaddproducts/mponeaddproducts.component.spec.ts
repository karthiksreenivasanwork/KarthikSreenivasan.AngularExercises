import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MponeaddproductsComponent } from './mponeaddproducts.component';

describe('MponeaddproductsComponent', () => {
  let component: MponeaddproductsComponent;
  let fixture: ComponentFixture<MponeaddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MponeaddproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MponeaddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
