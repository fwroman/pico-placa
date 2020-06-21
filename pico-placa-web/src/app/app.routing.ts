import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicoPlacaComponent } from './components/pico-placa/pico-placa.component';

const routes: Routes = [
    { pathMatch: 'full', path: '', component: PicoPlacaComponent },
    { pathMatch: 'full', path: 'pico-placa', component: PicoPlacaComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);