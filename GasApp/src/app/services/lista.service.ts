import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gasolinera } from '../models/gasolinera';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private apiUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/PreciosEESSTerrestres';
  constructor(private http: HttpClient) { }

  obtenerGasolineras(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => this.transformarDatos(data))
    );
  }

  private transformarDatos(data: any): any {
    // Convierte el objeto JSON en una cadena, reemplazando espacios en blanco en las claves
    const dataString = JSON.stringify(data, (key, value) => {
      if (typeof key === 'string' && key.includes(' ')) {
        const newKey = key.replace(/ /g, '');
        return { [newKey]: value };
      }
      return value;
    });
  
    // Convierte de nuevo la cadena JSON a un objeto
    return JSON.parse(dataString);
  }
  
}

