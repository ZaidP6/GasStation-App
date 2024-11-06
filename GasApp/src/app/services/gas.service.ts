import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GasService {
  apiUrl = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";

  constructor(private http: HttpClient) {}

  getGasList() {
    return this.http.get(this.apiUrl);
  }
}
