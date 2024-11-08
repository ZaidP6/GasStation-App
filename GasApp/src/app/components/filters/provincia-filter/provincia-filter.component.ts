import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GasolineraService } from '../../../services/gasolinera.service';

@Component({
  selector: 'app-provincia-filter',
  templateUrl: './provincia-filter.component.html',
  styleUrl: './provincia-filter.component.css'
})
export class ProvinciaFilterComponent {
  provincias: any[] = [];
  
  @Input() set comunidadId(value: string | null) {
    if (value) {
      this.gasolineraService.getProvincias(value).subscribe(data => this.provincias = data);
    } else {
      this.provincias = [];
    }
  }
  
  @Output() provinciaSelected = new EventEmitter<string>();

  constructor(private gasolineraService: GasolineraService) {}

  onProvinciaSelect(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.provinciaSelected.emit(selectedId);
  }
}
