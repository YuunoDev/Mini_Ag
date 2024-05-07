import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmanComponent } from './layoutman.component';

describe('LayoutmanComponent', () => {
  let component: LayoutmanComponent;
  let fixture: ComponentFixture<LayoutmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
