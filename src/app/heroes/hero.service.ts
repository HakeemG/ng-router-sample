import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessageService } from '../message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    this.log(`fetched hero id=${id}`);
    return this.getHeroes()
      .pipe(
        map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
      );
  }

}
