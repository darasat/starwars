import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {SwapiProvider} from "../../providers/swapi/swapi";
import {FilmsDetailPage} from "../films-detail/films-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   // list of movies
  films: Observable<any>;
  constructor(public navCtrl: NavController,  public navParams: NavParams, public swapiProvider: SwapiProvider) {
    this.films = this.swapiProvider.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push(FilmsDetailPage, {film: film});
  }

}
