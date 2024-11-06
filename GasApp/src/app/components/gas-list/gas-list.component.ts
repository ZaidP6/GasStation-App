import { Component, OnInit } from '@angular/core';
import { Gasolinera } from '../../models/gas-item.dto';
import { GasService } from '../../services/gas.service';

@Component({
  selector: 'app-gas-list',
  templateUrl: './gas-list.component.html',
  styleUrl: './gas-list.component.css'
})
export class GasListComponent implements OnInit{

  listadoGasolineras:Gasolinera[] = [];

  constructor(private gasService:GasService){}

  ngOnInit(){
    this.gasService.getGasList().subscribe((respuesta) => {
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras);
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
        
      });

      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        gasolineraChusquera['Precio Gasolina 95 E5'],
        gasolineraChusquera['Precio Gasoleo A'],
        gasolineraChusquera['C.P.'],
        gasolineraChusquera['Dirección'],
        gasolineraChusquera['Provincia'],
        gasolineraChusquera['Municipio']
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }

}
