import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarslComponent } from './carsl.component';

describe('CarslComponent', () => {
  let component: CarslComponent;
  let fixture: ComponentFixture<CarslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarslComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
