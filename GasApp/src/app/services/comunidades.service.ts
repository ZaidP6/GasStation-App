import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {
  private comunidadesUrl = 'URL_DE_LAS_COMUNIDADES';
  private provinciasUrl = 'URL_DE_LAS_PROVINCIAS';

  constructor(private http: HttpClient) {}

  obtenerComunidades(): Observable<any> {
    return this.http.get<any>(this.comunidadesUrl);
  }

  obtenerProvincias(comunidadId: string): Observable<any> {
    return this.http.get<any>(`${this.provinciasUrl}/${comunidadId}`);
  }
}
