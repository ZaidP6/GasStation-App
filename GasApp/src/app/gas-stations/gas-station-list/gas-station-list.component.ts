import { Component, OnInit } from '@angular/core';
import { GasStationService } from '../services/gas-station.service';

@Component({
  selector: 'app-gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.css']
})
export class GasStationListComponent implements OnInit {
  gasStations: any[] = [];
  pageSize: number = 20;
  currentPage: number = 1;

  constructor(private gasStationService: GasStationService) {}

  ngOnInit(): void {
    this.loadGasStations();
  }

  loadGasStations(): void {
    // Load gas stations by page
  }

  openInMaps(address: string): void {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  }
}
