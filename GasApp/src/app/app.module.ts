import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasListComponent } from './components/gas-list/gas-list.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ComunityFilterComponent } from './components/comunity-filter/comunity-filter.component';
import { ProvinceFilterComponent } from './components/province-filter/province-filter.component';

@NgModule({
	declarations: [
		AppComponent,
		GasListComponent,
  		NavbarComponent,
    ComunityFilterComponent,
    ProvinceFilterComponent
	],
	imports: [BrowserModule,
		AppRoutingModule, BrowserAnimationsModule, NgbModule, FormsModule],
	providers: [
		provideClientHydration(),
		provideHttpClient()
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
