import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfilhoComponent } from './cfilho.component';

describe('CfilhoComponent', () => {
  let component: CfilhoComponent;
  let fixture: ComponentFixture<CfilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
