import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';


@Component({
  selector: 'pokemon-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrl: './poke-cards.component.scss'
})
export class PokeCardsComponent {

  @Input()
  public pokemonList:PokemonInfo[] = [];


}
