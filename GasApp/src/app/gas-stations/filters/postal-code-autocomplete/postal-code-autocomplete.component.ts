// src/app/components/postal-code-autocomplete/postal-code-autocomplete.component.ts
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GasStationService } from '../../services/gas-station.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-postal-code-autocomplete',
  template: `
    <mat-form-field>
      <input matInput [formControl]="postalCodeControl" placeholder="Código Postal" [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onOptionSelected($event)">
        <mat-option *ngFor="let code of filteredPostalCodes | async" [value]="code">
          {{ code }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
})
export class PostalCodeAutocompleteComponent implements OnInit {
  postalCodeControl = new FormControl('');
  postalCodes: string[] = [];
  filteredPostalCodes: Observable<string[]>;

  @Output() filterChange = new EventEmitter<string>();

  constructor(private gasStationService: GasStationService) {}

  ngOnInit(): void {
    this.gasStationService.getPostalCodes().subscribe((codes) => {
      this.postalCodes = codes;
      this.filteredPostalCodes = this.postalCodeControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.postalCodes.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event): void {
    this.filterChange.emit(event.option.value);
  }
}
