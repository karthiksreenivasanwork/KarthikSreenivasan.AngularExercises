import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinteractionsComponent } from './componentinteractions.component';

describe('ComponentinteractionsComponent', () => {
  let component: ComponentinteractionsComponent;
  let fixture: ComponentFixture<ComponentinteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinteractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
