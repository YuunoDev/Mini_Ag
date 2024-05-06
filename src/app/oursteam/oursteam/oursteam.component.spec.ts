import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursteamComponent } from './oursteam.component';

describe('OursteamComponent', () => {
  let component: OursteamComponent;
  let fixture: ComponentFixture<OursteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OursteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OursteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
