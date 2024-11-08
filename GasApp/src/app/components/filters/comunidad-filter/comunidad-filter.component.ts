import { Component, EventEmitter, Output } from '@angular/core';
import { GasolineraService } from '../../../services/gasolinera.service';
import { Gasolinera } from '../../../models/gasolinera';

@Component({
  selector: 'app-comunidad-filter',
  templateUrl: './comunidad-filter.component.html',
  styleUrl: './comunidad-filter.component.css'
})
export class ComunidadFilterComponent {
  @Output() comunidadSelect = new EventEmitter<string>();
  @Output() provinciaSelect = new EventEmitter<string>();

  comunidades: string[] = [];
  provincias: string[] = []; 
  gasolineras: Gasolinera[] = [];
  selectedComunidad: string = '';
  selectedProvincia: string = '';

  constructor(private gasolineraService: GasolineraService) {}

  ngOnInit() {
    this.gasolineraService.getComunidades().subscribe(data => this.comunidades = data);
    this.gasolineraService.getProvincias;
  }

  onComunidadChange(): void {
    if (this.selectedComunidad) {
      // Llamar al endpoint para obtener provincias de la comunidad seleccionada
      this.gasolineraService.getProvinciasPorComunidad(this.selectedComunidad).subscribe((provincias: string[]) => {
        this.provincias = provincias;
      });
    } else {
      this.provincias = [];
    }
  }

  // Cuando se selecciona una provincia, actualizar las gasolineras
  onProvinciaChange(): void {
    if (this.selectedProvincia) {
      // Filtrar por provincia
      this.gasolineraService.getGasolinerasPorProvincia(this.selectedProvincia).subscribe((gasolineras: Gasolinera[]) => {
        this.gasolineras = gasolineras;
      });
    }
  }
}
