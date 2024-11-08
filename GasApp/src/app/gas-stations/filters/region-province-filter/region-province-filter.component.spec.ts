import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionProvinceFilterComponent } from './region-province-filter.component';

describe('RegionProvinceFilterComponent', () => {
  let component: RegionProvinceFilterComponent;
  let fixture: ComponentFixture<RegionProvinceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionProvinceFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionProvinceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
