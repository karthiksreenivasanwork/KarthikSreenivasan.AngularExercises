import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiinactivecproductsComponent } from './ciinactivecproducts.component';

describe('CiinactivecproductsComponent', () => {
  let component: CiinactivecproductsComponent;
  let fixture: ComponentFixture<CiinactivecproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiinactivecproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiinactivecproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
