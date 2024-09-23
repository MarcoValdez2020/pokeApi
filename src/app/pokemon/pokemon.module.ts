import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';

import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PokeCardsComponent,
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // prime ng
    CardModule,
    ButtonModule,

    //own modules
     //own modules
     SharedModule,

  ],
  exports:[
    PokemonPageComponent
  ]
})
export class PokemonModule { }
