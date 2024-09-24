import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

@Component({
  selector: 'pokemon-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.scss'
})
export class PokemonStatsComponent implements OnInit {

  @Input()
  public pokemon : PokemonInfo = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    stats: [],
    types: [],
    weight: 0
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }


  pokemonStats: number[] = [];

  data: any;

  options: any;

  ngOnInit(): void {
    this.extractStats()
    this.createChart();
  }

  createChart(){

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue(this.pokemonChartColor(this.pokemon));
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    this.data = {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
        datasets: [
            {
                label: 'Pokemon Stats',
                borderColor: documentStyle.getPropertyValue(this.pokemonChartColor(this.pokemon)),
                pointBackgroundColor: documentStyle.getPropertyValue(this.pokemonChartColor(this.pokemon)),
                pointBorderColor: documentStyle.getPropertyValue(this.pokemonChartColor(this.pokemon)),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue(this.pokemonChartColor(this.pokemon)),
                data: this.pokemonStats,
            },
        ]
    };

    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                },
                pointLabels: {
                    color: textColorSecondary
                }
            }
        }
    };
  }


  pokemonChartColor(pokemon:PokemonInfo):string{
    switch (pokemon.types[0].type.name){
      case 'grass':
        return '--green-400';
      case 'poison':
        return '--purple-500';
      case 'fire':
        return '--orange-400';
      case 'flying':
        return '--cyan-700';
      case 'water':
        return '--blue-300';
      case 'bug':
        return '--green-300';
      case 'normal':
        return '--bluegray-300';
      case 'electric':
        return '--yellow-300';
      case 'ground':
        return '--orange-700';
      case 'rock':
        return '--yellow-700';
      case 'fairy':
        return '--pink-300';
      case 'fighting':
        return '--red-400';
      case 'psychic':
        return '--pink-500';
      case 'ghost':
        return '--blue-600';
      case 'ice':
        return '--blue-100';
      case 'dragon':
        return '--blue-500';
      default:
        return '--bluegray-400';
    }


  }

  extractStats() {
    // Extrae los valores de base_stat de cada stat y los asigna al arreglo pokemonStats
    this.pokemonStats = this.pokemon.stats.map(stat => stat.base_stat);
  }


}
