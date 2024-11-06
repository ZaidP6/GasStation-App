import { Component, OnInit } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera.dto';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  listaGasolineras:Gasolinera[] = []

  constructor(private gasolineraService:ListaService){}

  ngOnInit() {
    this.gasolineraService.getLista().subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {
        // Transformo el String en un objeto JSON
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listaGasolineras = this.cleanProperties(arrayGasolineras);
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
        if (key === 'C.P.') {
          gasolineraConNombresGuenos['postalCode'] = gasolineraChusquera[key];
        }
      });

      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        gasolineraChusquera['Precio Gasolina 95 E5'],
        gasolineraChusquera['Precio Gasoleo A'],
        gasolineraChusquera['C.P.']
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }
}
