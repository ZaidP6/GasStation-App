// src/app/services/gas-station.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GasStationService {
  private baseUrl = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes';
  private jsonServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Obtiene gasolineras por comunidad autónoma
  getGasStationsByRegion(regionId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/PreciosEESSTerrestresFiltroCCAA/${regionId}`);
  }

  // Obtiene gasolineras por provincia
  getGasStationsByProvince(provinceId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/PreciosEESSTerrestresFiltroProvincia/${provinceId}`);
  }

  // Obtiene comunidades autónomas
  getCommunities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ComunidadesAutonomas`);
  }

  // Obtiene provincias de una comunidad
  getProvincesByCommunity(communityId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ProvinciasFiltroComunidad/${communityId}`);
  }

  // Obtiene códigos postales desde JSON Server
  getPostalCodes(): Observable<any> {
    return this.http.get(`${this.jsonServerUrl}/postalCodes`);
  }
}
