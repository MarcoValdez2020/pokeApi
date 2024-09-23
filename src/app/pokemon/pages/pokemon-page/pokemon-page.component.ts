import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokeAPIResponse } from '../../interfaces/poke-api-response.interface';
import { forkJoin, Observable } from 'rxjs';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

@Component({
  selector: 'pokemon-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {




  public pokemonList:PokemonInfo[] = [];
  public filterPokemonList:PokemonInfo[] = [];
  public notFound:boolean = false;


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
        this.filterPokemonList = pokemonsInfo;

      });
    });
  }

  onSearchTermChange(searchTerm: string) {
    if(searchTerm ===''){
      // si borramos el termino de busqueda se reestablece el valor
      this.filterPokemonList = this.pokemonList;
      // restablecemos not found a false para que no aparezca el componente
      this.notFound=false;
      return;
    }

    this.filterPokemonList = this.pokeApi.filterPokemons(searchTerm,this.filterPokemonList)
    if(this.filterPokemonList.length===0){
      this.notFound=true;
    }

  }


}
