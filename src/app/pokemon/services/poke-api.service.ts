import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPIResponse } from '../interfaces/poke-api-response.interface';
import { Observable } from 'rxjs';
import { PokemonInfo } from '../interfaces/pokemon-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url:string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllPokemons(limit:string):Observable<PokeAPIResponse>{
    const params = new HttpParams()
    .set('limit',limit)
    .set('offset','0');
    return this.http.get<PokeAPIResponse>(`${this.url}`,{params:params})

  }

  public getPokemonInfo(url:string):Observable<PokemonInfo>{
    return this.http.get<PokemonInfo>(url)
  }


  public filterPokemons(term:string, pokemonList:PokemonInfo[]):PokemonInfo[]{
      const searchTerm:string = term.toLowerCase()
      return pokemonList.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm) ||
          pokemon.id.toString().includes(searchTerm)

      );
  }


}
