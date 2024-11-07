import { Component, Output } from '@angular/core';
import { ComunidadesService } from '../../services/comunidades.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-comunity-filter',
  templateUrl: './comunity-filter.component.html',
  styleUrl: './comunity-filter.component.css'
})
export class ComunityFilterComponent {
  @Output() comunidadSelect = new EventEmitter<string>();

  comunidades: string[] = []; // Reemplazar con datos reales

  onComunidadChange(comunidad: string): void {
    this.comunidadSelect.emit(comunidad);
  }

}
