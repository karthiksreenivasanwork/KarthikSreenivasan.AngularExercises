import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttrackingComponent } from './producttracking.component';

describe('ProducttrackingComponent', () => {
  let component: ProducttrackingComponent;
  let fixture: ComponentFixture<ProducttrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
