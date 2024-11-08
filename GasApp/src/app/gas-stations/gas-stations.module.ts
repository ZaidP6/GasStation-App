import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasStationListComponent } from './gas-station-list/gas-station-list.component';
import { FuelTypeFilterComponent } from './filters/fuel-type-filter/fuel-type-filter.component';
import { BrandFilterComponent } from './filters/brand-filter/brand-filter.component';
import { PostalCodeAutocompleteComponent } from './filters/postal-code-autocomplete/postal-code-autocomplete.component';
import { RegionProvinceFilterComponent } from './filters/region-province-filter/region-province-filter.component';
import { PriceRangeFilterComponent } from './filters/price-range-filter/price-range-filter.component';



@NgModule({
  declarations: [
    GasStationListComponent,
    FuelTypeFilterComponent,
    BrandFilterComponent,
    PostalCodeAutocompleteComponent,
    RegionProvinceFilterComponent,
    PriceRangeFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GasStationsModule { }
