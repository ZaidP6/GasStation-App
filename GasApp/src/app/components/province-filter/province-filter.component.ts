import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GasService } from '../../services/gas.service';

@Component({
  selector: 'app-province-filter',
  templateUrl: './province-filter.component.html',
  styleUrl: './province-filter.component.css'
})
export class ProvinceFilterComponent {
  @Input() comunidad: string = '';
  @Output() provinciaSelect = new EventEmitter<string>();

  provincias: string[] = [];
  selectedProvincia: string = '';

  constructor(private gasolineraService: GasService) {}

  ngOnChanges() {
    if (this.comunidad) {
      this.gasolineraService.getProvinciasPorComunidad(this.comunidad).subscribe((data) => {
        this.provincias = data.map((item) => item.nombre);
      });
    } else {
      this.provincias = [];
    }
  }

  onProvinciaChange() {
    this.provinciaSelect.emit(this.selectedProvincia);
  }
  
}
