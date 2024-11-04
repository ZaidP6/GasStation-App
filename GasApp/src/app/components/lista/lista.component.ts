import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { Gasolinera } from '../../models/gasolinera';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent  implements OnInit {

  listaGasolineras: any[] = [];

  constructor(private gasolinerasService:ListaService){}
  
  ngOnInit(): void {
    this.gasolinerasService.obtenerGasolineras().subscribe((data) => {
      this.listaGasolineras = data.ListaEESSPrecio;
    });
  }
}

