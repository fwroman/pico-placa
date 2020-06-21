import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PicoPlacaFormComponent } from './components/pico-placa-form/pico-placa-form.component';
import { PicoPlacaAlertComponent } from './components/pico-placa-alert/pico-placa-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    PicoPlacaFormComponent,
    PicoPlacaAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
