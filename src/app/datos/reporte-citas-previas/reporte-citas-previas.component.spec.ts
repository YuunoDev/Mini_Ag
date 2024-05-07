import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCitasPreviasComponent } from './reporte-citas-previas.component';

describe('ReporteCitasPreviasComponent', () => {
  let component: ReporteCitasPreviasComponent;
  let fixture: ComponentFixture<ReporteCitasPreviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteCitasPreviasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteCitasPreviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
