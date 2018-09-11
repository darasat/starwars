import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {SwapiProvider} from "../../providers/swapi/swapi";
/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {
  vehicles: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public swapiProvider: SwapiProvider) {
    this.vehicles = this.swapiProvider.getVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
  }

}
