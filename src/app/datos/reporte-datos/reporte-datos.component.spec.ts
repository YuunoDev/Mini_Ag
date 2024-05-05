import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDatosComponent } from './reporte-datos.component';

describe('ReporteDatosComponent', () => {
  let component: ReporteDatosComponent;
  let fixture: ComponentFixture<ReporteDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
