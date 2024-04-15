import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPruebaComponent } from './servicio-prueba.component';

describe('ServicioPruebaComponent', () => {
  let component: ServicioPruebaComponent;
  let fixture: ComponentFixture<ServicioPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioPruebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
