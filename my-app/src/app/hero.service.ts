import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  
  getHero(title:string): Observable<any>{
   	return this.http.get(this.baseUrl + title);
  }
  

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private baseUrl = 'http://www.omdbapi.com/?apikey=88240a0d&type=movie&s=';  // URL to web api
}
