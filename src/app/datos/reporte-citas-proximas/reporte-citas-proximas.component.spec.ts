import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCitasProximasComponent } from './reporte-citas-proximas.component';

describe('ReporteCitasProximasComponent', () => {
  let component: ReporteCitasProximasComponent;
  let fixture: ComponentFixture<ReporteCitasProximasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteCitasProximasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteCitasProximasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
