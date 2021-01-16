import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() {
  	this.movies = [];
  }

  ngOnInit(): void {
  }
	
  movies:Hero[];

  @Input() hero: Hero;

  nominate(movie:Hero) {
  	this.movies.push(movie);
  }

  remove(movie:Hero) {
  	this.movies = this.movies.filter(entry => entry !== movie);
  }

  nominated(movie:Hero):boolean {
  	//console.log(this.movies.indexOf({year:movie.year,title:movie.title}));
  	return this.movies.find(e => e.title===movie.title && e.year===movie.year)!=null;
  }
  

}
