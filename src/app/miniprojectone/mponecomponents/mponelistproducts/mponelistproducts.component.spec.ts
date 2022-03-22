import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MponelistproductsComponent } from './mponelistproducts.component';

describe('MponelistproductsComponent', () => {
  let component: MponelistproductsComponent;
  let fixture: ComponentFixture<MponelistproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MponelistproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MponelistproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
