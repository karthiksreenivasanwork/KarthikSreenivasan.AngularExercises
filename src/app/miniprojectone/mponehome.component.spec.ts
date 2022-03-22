import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MponehomeComponent } from './mponehome.component';

describe('MponehomeComponent', () => {
  let component: MponehomeComponent;
  let fixture: ComponentFixture<MponehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MponehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MponehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
