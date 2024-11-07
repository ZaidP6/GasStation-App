import { Component, OnInit } from '@angular/core';
import { Gasolinera } from '../../models/gas-item.dto';
import { GasService } from '../../services/gas.service';

@Component({
  selector: 'app-gas-list',
  templateUrl: './gas-list.component.html',
  styleUrls: ['./gas-list.component.css']
})
export class GasListComponent implements OnInit {
  listadoGasolineras: Gasolinera[] = [];
  filteredGasolineras: Gasolinera[] = [];
  postalCodeFilter: string = '';
  fuelTypeFilter: string = '';
  minPriceFilter: number | null = null;
  maxPriceFilter: number | null = null;
  totalGasolineras: number = 0;


  filterBrands: { [key: string]: boolean } = {
    'REPSOL': false,
    'CEPSA': false,
    'CARREFOUR': false,
    'BP': false,
    'Otras': false
  };
  selectAllBrands:boolean =false;

  constructor(private gasService: GasService) { }

  ngOnInit() {
    this.gasService.getGasList().subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras);
        this.filteredGasolineras = [...this.listadoGasolineras];
        this.updateGasolinerasCount();
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }

  toggleSelectAllBrands() {
    Object.keys(this.filterBrands).forEach((brand) => {
      this.filterBrands[brand] = this.selectAllBrands;
    });
    this.applyFilters();
    this.updateGasolinerasCount();
  }

  private cleanProperties(arrayGasolineras: any) {
    let newArray: Gasolinera[] = [];
    arrayGasolineras.forEach((gasolineraChusquera: any) => {
      const gasolineraConNombresGuenos: any = {};
      Object.keys(gasolineraChusquera).forEach((key) => {
        if (key === 'IDEESS') {
          gasolineraConNombresGuenos['id'] = gasolineraChusquera[key];
        }
        if (key === 'Rótulo') {
          gasolineraConNombresGuenos['nombre'] = gasolineraChusquera[key];
        }
        if (key === 'Precio Gasolina 95 E5') {
          gasolineraConNombresGuenos['price95'] = gasolineraChusquera[key];
        }
        if (key === 'Precio Gasoleo A') {
          gasolineraConNombresGuenos['priceDiesel'] = gasolineraChusquera[key];
        }
        if (key === 'C.P.') {
          gasolineraConNombresGuenos['cp'] = gasolineraChusquera[key];
        }
        if (key === 'Dirección') {
          gasolineraConNombresGuenos['direction'] = gasolineraChusquera[key];
        }
        if (key === 'Provincia') {
          gasolineraConNombresGuenos['province'] = gasolineraChusquera[key];
        }
        if (key === 'Municipio') {
          gasolineraConNombresGuenos['village'] = gasolineraChusquera[key];
        }
        if (key === 'Latitud') {
          gasolineraConNombresGuenos['latitude'] = gasolineraChusquera[key];
        }
        if (key === 'Longitud (WGS84)') {
          gasolineraConNombresGuenos['longitude'] = gasolineraChusquera[key];
        }

      });

      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        gasolineraChusquera['Precio Gasolina 95 E5'],
        gasolineraChusquera['Precio Gasoleo A'],
        gasolineraChusquera['C.P.'],
        gasolineraChusquera['Dirección'],
        gasolineraChusquera['Provincia'],
        gasolineraChusquera['Municipio'],
        gasolineraChusquera['Latitud'],
        gasolineraChusquera['Longitud (WGS84)']
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }


  updateGasolinerasCount() {
    this.totalGasolineras = this.filteredGasolineras.length;
  }

  // Método para filtrar por código postal y marcas seleccionadas
  filterByPostalCode() {
    this.applyFilters();
    this.updateGasolinerasCount();
  }

  // Método para filtrar por marcas seleccionadas
  filterByBrands() {
    this.applyFilters();
    this.updateGasolinerasCount();
  }

  // Aplicar todos los filtros (código postal + marcas)
  applyFilters() {
    this.filteredGasolineras = this.listadoGasolineras.filter((gasolinera) => {
      // Filtrado por código postal
      const matchesPostalCode = this.postalCodeFilter ? gasolinera.postalCode.includes(this.postalCodeFilter) : true;

      // Filtrado por marcas seleccionadas
      const matchesBrand = Object.keys(this.filterBrands).some(brand => {
        return this.filterBrands[brand] && (brand === 'Otras'
          ? !['REPSOL', 'CEPSA', 'CARREFOUR', 'BP'].includes(gasolinera.nombre)
          : gasolinera.nombre === brand);
      });
      return matchesPostalCode && matchesBrand;
    });
  }

  replaceComas(texto: string) {
    return texto.replace(',', '.');
  }

}
