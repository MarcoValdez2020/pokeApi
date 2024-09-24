import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';

import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [
    PokeCardsComponent,
    PokemonPageComponent,
    PokemonStatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // prime ng
    CardModule,
    ButtonModule,
    TabViewModule,
    ChartModule,
    DialogModule,

     //own modules
     SharedModule,

  ],
  exports:[
    PokemonPageComponent
  ]
})
export class PokemonModule { }
