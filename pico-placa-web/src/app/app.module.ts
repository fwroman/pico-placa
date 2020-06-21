import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicoPlacaFormComponent } from './components/pico-placa-form/pico-placa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PicoPlacaFormComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
