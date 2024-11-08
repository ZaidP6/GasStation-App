// src/app/gas-stations/filters/brand-filter/brand-filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brand-filter',
  template: `
    <mat-checkbox *ngFor="let brand of brands" (change)="onBrandChange(brand)">
      {{ brand }}
    </mat-checkbox>
  `,
})
export class BrandFilterComponent {
  brands: string[] = ['Repsol', 'Shell', 'Cepsa', 'Otros'];
  selectedBrands: string[] = [];

  @Output() filterChange = new EventEmitter<string[]>();

  onBrandChange(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }
    this.filterChange.emit(this.selectedBrands);
  }
}
