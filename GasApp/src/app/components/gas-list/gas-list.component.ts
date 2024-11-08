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
  filteredPostalCodes: string[] = [];
  filterBrands: { [key: string]: boolean } = {
    'REPSOL': false,
    'CEPSA': false,
    'CARREFOUR': false,
    'BP': false,
    'Otras': false
  };
  totalGasolineras: number = 0;

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
        this.updatePostalCodes();
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
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

  // Filtrar los códigos postales según la entrada del usuario
  filterPostalCodes() {
    this.filteredPostalCodes = this.listadoGasolineras
      .map(gasolinera => gasolinera.postalCode) // Obtener todos los códigos postales
      .filter((code, index, self) => self.indexOf(code) === index) // Eliminar duplicados
      .filter(code => code.includes(this.postalCodeFilter)); // Filtrar por el valor del input
      
    this.filterByPostalCode(); // Aplicar el filtro de código postal
  }

  // Método para actualizar los códigos postales disponibles
  updatePostalCodes() {
    this.filteredPostalCodes = this.listadoGasolineras
      .map(gasolinera => gasolinera.postalCode)
      .filter((code, index, self) => self.indexOf(code) === index); // Eliminar duplicados
  }

  // Filtrar gasolineras por código postal y marcas seleccionadas
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
      const matchesPostalCode = this.postalCodeFilter ? gasolinera.postalCode.includes(this.postalCodeFilter) : true;
      const matchesBrand = Object.keys(this.filterBrands).some(brand => {
        return this.filterBrands[brand] && (brand === 'Otras'
          ? !['REPSOL', 'CEPSA', 'CARREFOUR', 'BP'].includes(gasolinera.nombre)
          : gasolinera.nombre === brand);
      });
      return matchesPostalCode && matchesBrand;
    });
  }

  // Actualizar el contador de gasolineras filtradas
  updateGasolinerasCount() {
    this.totalGasolineras = this.filteredGasolineras.length;
  }

  replaceComas(texto: string) {
    return texto.replace(',', '.');
  }
}
