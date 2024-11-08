import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-postal-code-filter',
  templateUrl: './postal-code-filter.component.html',
  styleUrl: './postal-code-filter.component.css'
})
export class PostalCodeFilterComponent {
  @Output() postalCodeFilter = new EventEmitter<string>();
  postalCode: string = '';

  onPostalCodeChange() {
    this.postalCodeFilter.emit(this.postalCode);
  }
}
