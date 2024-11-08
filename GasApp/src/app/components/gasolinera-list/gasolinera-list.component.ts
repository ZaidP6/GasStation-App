import { Component, Input } from '@angular/core';
import { GasolineraService } from '../../services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrl: './gasolinera-list.component.css'
})
export class GasolineraListComponent {
  @Input() provinciaId: string | null = '';  // Recibe el ID de la provincia seleccionada
  gasolineras: Gasolinera[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private gasolineraService: GasolineraService) {}

  ngOnChanges() {
    if (this.provinciaId) {
      this.gasolineraService.getGasolineras().subscribe(data => {
        this.gasolineras = data;
      });
    }
  }

  get paginatedGasolineras() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.gasolineras.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.gasolineras.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
