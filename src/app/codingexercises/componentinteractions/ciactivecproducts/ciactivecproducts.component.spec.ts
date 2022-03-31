import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiactivecproductsComponent } from './ciactivecproducts.component';

describe('CiactivecproductsComponent', () => {
  let component: CiactivecproductsComponent;
  let fixture: ComponentFixture<CiactivecproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiactivecproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiactivecproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
