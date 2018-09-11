import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {SwapiProvider} from "../../providers/swapi/swapi";

/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {
  starships: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public swapiProvider: SwapiProvider) {
    this.starships = this.swapiProvider.getStarships();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarshipsPage');
  }

}
