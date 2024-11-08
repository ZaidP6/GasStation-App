import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrl: './brand-filter.component.css'
})
export class BrandFilterComponent {
  @Output() brandFilter = new EventEmitter<void>();
  selectAllBrands: boolean = false;
  filterBrands: { [key: string]: boolean } = {
    'REPSOL': false,
    'CEPSA': false,
    'CARREFOUR': false,
    'BP': false,
    'Otras': false
  };

  onBrandChange() {
    this.brandFilter.emit();
  }


  get brandKeys() {
    return Object.keys(this.filterBrands);
  }

  toggleSelectAll() {
    this.selectAllBrands = !this.selectAllBrands;
    Object.keys(this.filterBrands).forEach(brand => {
      this.filterBrands[brand] = this.selectAllBrands;
    });
    this.onBrandChange();
  }
}
