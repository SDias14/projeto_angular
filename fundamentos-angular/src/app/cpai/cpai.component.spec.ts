import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaiComponent } from './cpai.component';

describe('CpaiComponent', () => {
  let component: CpaiComponent;
  let fixture: ComponentFixture<CpaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
