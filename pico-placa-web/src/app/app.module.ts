import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicoPlacaComponent } from './components/pico-placa/pico-placa.component';

@NgModule({
  declarations: [
    AppComponent,
    PicoPlacaComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
