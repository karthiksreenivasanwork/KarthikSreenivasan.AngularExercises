import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttransformComponent } from './texttransform.component';

describe('TexttransformComponent', () => {
  let component: TexttransformComponent;
  let fixture: ComponentFixture<TexttransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexttransformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
