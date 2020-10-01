import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameClientService {

  constructor(private httpClient: HttpClient) {

  }

  public getGame(): Observable<Game> {
    return this.httpClient.get<Game>('http://localhost:3000/api/v1/game');
  }

  public postRollTheDices(postRequestBody: PostRequestBody): Observable<Game> {
    return this.httpClient.post<Game>('http://localhost:3000/api/v1/game', postRequestBody);
  }

}

export interface Dice {
  countOfDiceSides: number;
  number: number;
  isSelected: boolean;
}

export interface Mug {
  dices: Dice[];
  countOfDice: number;
}

export interface Game {
  mug: Mug;
}

export interface PostRequestBody {
  numbersToChange: Array<number>;
}
