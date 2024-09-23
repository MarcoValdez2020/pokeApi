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
    this.loadPokemons('151')
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
    if (searchTerm === '') {
        // Si se borramos el término de búsqueda, restablecemos el valor
        this.filterPokemonList = this.pokemonList;
        // Restablecemos not found a false para que no aparezca
        this.notFound = false;
    } else {
        // Filtramos la lista de Pokémon
        const filteredList = this.pokeApi.filterPokemons(searchTerm, this.pokemonList);

        // Si encontramos resultados, actualizamos filterPokemonList
        if (filteredList.length > 0) {
            this.filterPokemonList = filteredList;
            this.notFound = false; // Restablecer notFound
        } else {
          // no encontramos nada entonces vaciamos la lista y mostramos notfound
            this.filterPokemonList = [];
            this.notFound = true;
        }
    }
}



}
