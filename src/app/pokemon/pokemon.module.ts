import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';

import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PokeCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // prime ng
    CardModule,
    ButtonModule,

  ],
  exports:[
    PokeCardsComponent
  ]
})
export class PokemonModule { }
