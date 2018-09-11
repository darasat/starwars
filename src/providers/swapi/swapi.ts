import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Character} from '../../models/Character';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/*
  Generated class for the SwapiProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  constructor(public http: HttpClient, public res: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

  getCharacterById(id: Character): Observable<Character> {
    return this.res.get(`https://swapi.co/api/people/${id}/`)
    .map(result => <Character>result.json());
      
  }

  getStarships(){
    return this.http.get('https://swapi.co/api/starships');
  }

  getVehicles(){
    return this.http.get('https://swapi.co/api/vehicles');
  }
}
