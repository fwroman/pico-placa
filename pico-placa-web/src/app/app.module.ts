import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicoPlacaComponent } from './components/pico-placa/pico-placa.component';

//ROUTES
import { routing, appRoutingProviders } from './app.routing';
////

@NgModule({
  declarations: [
    AppComponent,
    PicoPlacaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
