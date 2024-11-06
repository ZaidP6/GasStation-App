import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ListaComponent,
		DropdownComponent,
  NavbarComponent
	],
	imports: [BrowserModule,
		AppRoutingModule, BrowserAnimationsModule],
	providers: [
		provideClientHydration(),
		provideHttpClient()
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
