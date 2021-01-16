import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.heroes = [];
  }

  heroes: Hero[];

  searchTitle: string;

  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getHero(title:string): void {
    this.heroService.getHero(title).subscribe(heroes =>
      heroes.Search.forEach( movie => this.heroes.push({
        year:movie.Year,
        title:movie.Title,
      })
      ))
  }

  clearHeroes() {
    this.heroes = [];
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero year=${hero.year}');
  }

}


