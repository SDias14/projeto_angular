import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servico01Component } from './servico01.component';

describe('Servico01Component', () => {
  let component: Servico01Component;
  let fixture: ComponentFixture<Servico01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servico01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servico01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
