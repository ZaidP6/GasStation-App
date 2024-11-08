import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostalCodeResponse } from '../models/postal-code.interface';

@Injectable({
  providedIn: 'root'
})
export class PostalCodesService {
  apiUrl = 'http://localhost:3000/code-list';

  constructor(private http: HttpClient) { }

  getPostalCodes(): Observable<PostalCodeResponse[]> {
    return this.http.get<PostalCodeResponse[]>(this.apiUrl);
  }
}
