import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunidadesService } from '../../services/comunidades.service';

@Component({
  selector: 'app-province-filter',
  templateUrl: './province-filter.component.html',
  styleUrl: './province-filter.component.css'
})
export class ProvinceFilterComponent {
  @Input() comunidadId: string | null = null;
  @Output() provinciaSelect = new EventEmitter<string>();
  provincias: any[] = [];

  constructor(private comunidadService: ComunidadesService) {}

  ngOnInit(): void {
    if (this.comunidadId) {
      this.cargarProvincias();
    }
  }

  ngOnChanges(): void {
    this.cargarProvincias();
  }

  cargarProvincias(): void {
    if (this.comunidadId) {
      this.comunidadService.obtenerProvincias(this.comunidadId).subscribe((data) => {
        this.provincias = data;
      });
    }
  }

  onProvinciaChange(provincia: string): void {
    this.provinciaSelect.emit(provincia);
  }
}
