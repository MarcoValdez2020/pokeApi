import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';

import { ChipsModule } from 'primeng/chips';
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

    // prime ng
    CardModule,
    ButtonModule,

  ],
  exports:[
    PokeCardsComponent
  ]
})
export class PokemonModule { }
