// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComunidadFilterComponent } from './components/filters/comunidad-filter/comunidad-filter.component';
import { ProvinciaFilterComponent } from './components/filters/provincia-filter/provincia-filter.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { provideHttpClient } from '@angular/common/http'; // Agregar HttpClientModule
import { GasolineraService } from './services/gasolinera.service';
import { withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadFilterComponent,
    ProvinciaFilterComponent,
    GasolineraListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [GasolineraService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
