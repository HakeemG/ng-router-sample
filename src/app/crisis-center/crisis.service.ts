import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessageService } from '../message.service';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor(
    private messageService: MessageService,
  ) { }

  /** Log a CrisisService message with the MessageService */
  private log(message: string) {
    console.log(`CrisisService: ${message}`);
    this.messageService.add(`CrisisService: ${message}`);
  }
  getCrises(): Observable<Crisis[]> {
    this.log('fetched Crises');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    this.log(`fetched crisis id=${id}`);
    return this.getCrises()
      .pipe(
        map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
      );
  }

}
