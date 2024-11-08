import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTypeFilterComponent } from './fuel-type-filter.component';

describe('FuelTypeFilterComponent', () => {
  let component: FuelTypeFilterComponent;
  let fixture: ComponentFixture<FuelTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelTypeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
