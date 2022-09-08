import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../interface/beer';
import { Wine } from '../interface/wine';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.sampleapis.com/beers/ale');
  }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('https://api.sampleapis.com/wines/reds');
  }
}
