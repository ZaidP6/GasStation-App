import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasService {
  apiUrl = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";
  private baseUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes'; 

  constructor(private http: HttpClient) {}

  getGasList() {
    return this.http.get(this.apiUrl);
  }

  getComunidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Listados/ComunidadesAutonomas/`);
  }

  getProvincias(comunidad: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/listados/ProvinciasFiltroComunidad?comunidad=${comunidad}`);
  }

  // Obtener provincias por comunidad
  getProvinciasPorComunidad(comunidad: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Listados/ProvinciasPorComunidad/${comunidad}`);
  }

  // Obtener gasolineras por comunidad
  getGasolinerasPorComunidad(comunidad: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/PreciosEESSTerrestresFiltroCCAA?CCAA=${comunidad}`);
  }

  // Obtener gasolineras por provincia
  getGasolinerasPorProvincia(provincia: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/PreciosEESSTerrestresFiltroProvincia?provincia=${provincia}`);
  }
  
}
