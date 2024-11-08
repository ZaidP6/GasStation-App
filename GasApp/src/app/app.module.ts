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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		GasListComponent,
  		NavbarComponent
	],
	imports: [BrowserModule,
		AppRoutingModule, BrowserAnimationsModule, NgbModule, FormsModule, MatAutocompleteModule, MatInputModule, ReactiveFormsModule],
	providers: [
		provideClientHydration(),
		provideHttpClient(),
  provideAnimationsAsync()
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
