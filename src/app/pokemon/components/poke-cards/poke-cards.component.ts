import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { forkJoin, map, Observable, switchMap, switchScan } from 'rxjs';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';
import { PokeAPIResponse } from '../../interfaces/poke-api-response.interface';

@Component({
  selector: 'pokemon-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrl: './poke-cards.component.scss'
})
export class PokeCardsComponent  implements OnInit{


  public pokemonList:PokemonInfo[] = [];

  constructor(
    private pokeApi:PokeApiService,
  ){
  }

  ngOnInit(): void {
    this.loadPokemons('150')
  }


  public loadPokemons(limit: string){

    this.pokeApi.getAllPokemons(limit).subscribe((response: PokeAPIResponse) => {


      const pokemonListInfo: Observable<PokemonInfo>[] = [];

      response.results.forEach(pokemon => {
        pokemonListInfo.push(this.pokeApi.getPokemonInfo(pokemon.url));
      });


      forkJoin(pokemonListInfo).subscribe(pokemonsInfo => {
        this.pokemonList = pokemonsInfo;
        console.log(this.pokemonList);

      });
    });
  }


}
