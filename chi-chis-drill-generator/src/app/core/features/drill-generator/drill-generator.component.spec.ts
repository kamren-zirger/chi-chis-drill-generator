import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillGeneratorComponent } from './drill-generator.component';

describe('DrillGeneratorComponent', () => {
  let component: DrillGeneratorComponent;
  let fixture: ComponentFixture<DrillGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrillGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrillGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
