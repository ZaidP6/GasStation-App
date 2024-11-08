// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFilters: any = {};

  applyBrandFilter(brands: string[]): void {
    this.selectedFilters.brands = brands;
  }

  applyPostalCodeFilter(postalCode: string): void {
    this.selectedFilters.postalCode = postalCode;
  }
}
