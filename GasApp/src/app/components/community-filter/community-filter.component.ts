import { Component, EventEmitter, Output } from '@angular/core';
import { GasService } from '../../services/gas.service';
import { Gasolinera } from '../../models/gas-item.dto';

@Component({
  selector: 'app-community-filter',
  templateUrl: './community-filter.component.html',
  styleUrl: './community-filter.component.css'
})
export class CommunityFilterComponent {
  @Output() comunidadSelect = new EventEmitter<string>();
  @Output() provinciaSelect = new EventEmitter<string>();

  comunidades: string[] = [];
  provincias: string[] = []; 
  gasolineras: Gasolinera[] = [];
  selectedComunidad: string = '';
  selectedProvincia: string = '';

  constructor(private gasolinerasService: GasService) {}

  ngOnInit(): void {
    this.obtenerComunidades(); // Obtener comunidades al iniciar
  }

  // Obtener comunidades de la API
  obtenerComunidades(): void {
    // Aquí debes llamar al endpoint de comunidades
    this.gasolinerasService.getComunidades().subscribe((comunidades: string[]) => {
      this.comunidades = comunidades;
    });
  }

  // Cuando se selecciona una comunidad, obtener las provincias asociadas
  onComunidadChange(): void {
    if (this.selectedComunidad) {
      // Llamar al endpoint para obtener provincias de la comunidad seleccionada
      this.gasolinerasService.getProvinciasPorComunidad(this.selectedComunidad).subscribe((provincias: string[]) => {
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
      this.gasolinerasService.getGasolinerasPorProvincia(this.selectedProvincia).subscribe((gasolineras: Gasolinera[]) => {
        this.gasolineras = gasolineras;
      });
    }
  }

   // Método para obtener las provincias de una comunidad
   getProvinciasByComunidad(comunidad: string) {
    const url = `${this.gasolinerasService.apiUrl}ProvinciasFiltroComunidad/${comunidad}`;
    return this.gasolinerasService.getProvinciasPorComunidad(url);
  }
}
