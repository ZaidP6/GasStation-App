import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Comunidad {
  IDCCAA: string;
  CCAA: string;
}

interface Provincia {
  IDPovincia: string;
  Provincia: string;
}

interface Gasolinera {
  Rótulo: string;
  Dirección: string;
  Provincia: string;
  CódigoPostal: string;
  Gasolina95: string;
  Gasolina98: string;
  GasoleoA: string;
}

@Injectable({
  providedIn: 'root',
})
export class GasolineraService {
  
  constructor(private http: HttpClient) {}

  getComunidades(): Observable<any[]> {
    return this.http.get<any[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/ComunidadesAutonomas')
      .pipe(
        map(data => data.map(item => this.parseData(item)))
      );
  }

  getProvincias(comunidadId: string): Observable<any[]> {
    return this.http.get<any[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/ProvinciasFiltroComunidad/${comunidadId}`)
      .pipe(
        map(data => data.map(item => this.parseData(item)))
      );
  }

  getGasolineras(): Observable<any[]> {
    return this.http.get<any[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/PreciosEESSTerrestres/`)
      .pipe(
        map(data => data.map(item => this.parseData(item)))
      );
  }

  getGasolinerasPorProvincia(provinciaId: string): Observable<any[]> {
    return this.http.get<any[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/PreciosEESSTerrestresFiltroProvincia/${provinciaId}`)
      .pipe(
        map(data => data.map(item => this.parseData(item)))
      );
  }

  getProvinciasPorComunidad(selectedComunidad: string) {
    return this.http.get<any[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${this.getProvincias.name}`)
      .pipe(
        map(data => data.map(item => this.parseData(item)))
      );
  }

  private parseData(item: any): any {
    const parsedItem: any = {};
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        const parsedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
        parsedItem[parsedKey] = item[key];
      }
    }
    return parsedItem;
  }
}
