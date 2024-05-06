import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDatosComponent } from './alta-datos.component';

describe('AltaDatosComponent', () => {
  let component: AltaDatosComponent;
  let fixture: ComponentFixture<AltaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
